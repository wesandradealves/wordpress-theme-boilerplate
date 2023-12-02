<?php

defined( 'ABSPATH' ) || exit;

/**
 * This file contains definition of the core of the plugin
 *
 * @since 1.0.0
 * @since 4.0.0-beta
 * @package GPLVault Update Manager
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class GPLVault_Updater
 */
final class GPLVault_Client {
	protected static $singleton = null;

	private static $initiated = false;

	protected $version;

	protected $plugin_name;

	protected $plugin_basename;

	/**
	 * @var GPLVault_Hooks
	 */
	protected $emitter;


	/**
	 * @return GPLVault_Client
	 */
	public static function instance() {
		if ( is_null( self::$singleton ) ) {
			self::$singleton = new self();
		}

		return self::$singleton;
	}

	private function __construct() {
		$this->version         = GV_UPDATER_VERSION;
		$this->plugin_name     = GV_UPDATER_NAME;
		$this->plugin_basename = plugin_basename( GV_UPDATER_FILE );

		do_action( 'gv_client_loading' );

		$this->base_includes();
		$this->set_locale();

		do_action( 'gv_instantiated' );
		do_action( 'gv_client_loaded' );
	}

	public function version() {
		return $this->version;
	}

	public function plugin_basename() {
		return $this->plugin_basename;
	}

	public function plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * Sets the internationalization for the plugin
	 */
	private function set_locale() {
		add_action( 'plugins_loaded', array( $this, 'load_text_domain' ) );
	}

	public function load_text_domain() {
		load_plugin_textdomain(
			'gplvault',
			false,
			GV_UPDATER_PATH . 'languages'
		);
	}

	private function base_includes() {
		require_once $this->includes_path( '/exceptions/class-gplvault-invalid-ulid-exception.php' );
		require_once $this->includes_path( '/class-gplvault-ulid.php' );
		require_once $this->includes_path( '/class-gplvault-helper.php' );
		require_once $this->includes_path( '/gplvault-helpers.php' );
		require_once $this->includes_path( '/class-gplvault-ajax.php' );
		require_once $this->includes_path( '/class-gplvault-hooks.php' );
		require_once $this->includes_path( '/settings/class-gplvault-settings-manager.php' );
		require_once $this->includes_path( '/class-gplvault-util.php' );
		require_once $this->includes_path( '/gplvault-functions.php' );
		require_once $this->includes_path( '/api/class-gplvault-api-manager.php' );
		require_once $this->admin_path( '/class-gplvault-admin.php' );
		require_once $this->includes_path( '/class-gplvault-items.php' );
		require_once $this->includes_path( '/class-gplvault-updater.php' );
	}

	public function run() {
		$this->initial_hooks();
		GPLVault_Ajax::instance()->init();
		if ( is_admin() ) {
			GPLVault_Admin::instance()->init();
		}
		GPLVault_Items::instance()->init();
		GPLVault_Updater::instance()->init();
	}

	public function initial_hooks() {
		if ( true === self::$initiated ) {
			return;
		}
		self::$initiated = true;

		/** @var GPLVault_Util $gv_util */
		$gv_util = GPLVault_Util::instance();

		if ( gv_settings_manager()->license_is_activated() ) {
			add_filter( 'cron_schedules', array( $this, 'cron_schedules' ) );
		} else {
			remove_filter( 'cron_schedules', array( $this, 'cron_schedules' ) );
		}

		add_action( 'gv_api_license_activated', array( $this, 'load_initial_schema' ) );

		if ( gv_settings_manager()->license_is_activated() ) {
			add_action( 'admin_init', array( $this, 'gv_initialize_cron' ) );
			add_action( 'gplvault_six_hours_cron', array( $this, 'update_schema' ) );
			add_action( 'gplvault_status_check', array( $this, 'daily_status_check' ) );
			add_action( 'gplvault_fetch_client_schema', array( $this, 'update_client_schema' ) );
			add_action( 'gplvault_clean_up_logs', array( $this, 'cleanup_log_files' ) );
		} else {
			remove_action( 'gplvault_six_hours_cron', array( $this, 'update_schema' ) );
			remove_action( 'gplvault_fetch_client_schema', array( $this, 'update_client_schema' ) );
			remove_action( 'admin_init', array( $this, 'gv_initialize_cron' ) );
			remove_action( 'gplvault_status_check', array( $this, 'daily_status_check' ) );
			remove_action( 'gplvault_clean_up_logs', array( $this, 'cleanup_log_files' ) );
			$gv_util->clear_cron();
		}
		if ( wp_next_scheduled( 'gv_two_hours_cron' ) ) {
			wp_clear_scheduled_hook( 'gv_two_hours_cron' );
		}

		if ( gv_settings_manager()->is_origin_down() || gv_settings_manager()->is_api_paused() ) {
			add_action( 'admin_init', array( $this, 'server_monitor_cron' ) );
		} else {
			remove_action( 'admin_init', array( $this, 'server_monitor_cron' ) );
		}

		add_action( 'gplvault_server_check', array( $this, 'check_server_status' ) );
		add_filter( 'http_request_args', array( $this, 'allow_unsafe_archive_delivery' ), 1, 2 );
	}

	public function allow_unsafe_archive_delivery( $args, $url ) {
		if ( false !== strpos( $url, GV_UPDATER_API_URL ) ) {
			$args['reject_unsafe_urls'] = false;
		}

		return $args;
	}

	public function update_client_schema() {
		$schema = gv_api_manager()->client_schema();

		// gplvault_fetch_client_schema
		$logger              = gv_new_logger( 'cron-actions' );
		$log_pattern         = '{message} Handler: "{handler}" Hooked: "{hook}"';
		$log_data            = array(
			'message' => '',
			'handler' => __METHOD__,
			'hook'    => 'gplvault_fetch_client_schema',
		);
		$log_data['message'] = 'Client schema fetch action is called.';
		$logger->info( $log_pattern, $log_data );

		if ( ! is_wp_error( $schema ) && isset( $schema['data'] ) ) {
			gv_settings_manager()->save_client_schema( $schema['data'] );

			$log_data['message'] = 'Client schema fetch is completed successfully.';
			$logger->info( $log_pattern, $log_data );
		} else {
			$log_data['message'] = sprintf( 'Client schema request failed. Error: %s', $schema->get_error_message() );
			$logger->error( $log_pattern, $log_data );
		}
	}

	public function daily_status_check() {
		$status = gv_api_manager()->status();

		$logger              = gv_new_logger( 'cron-actions' );
		$log_pattern         = '{message} Handler: "{handler}" Hooked: "{hook}"';
		$log_data            = array(
			'message' => '',
			'handler' => __METHOD__,
			'hook'    => 'gplvault_status_check',
		);
		$log_data['message'] = 'Status check action is called.';
		$logger->info( $log_pattern, $log_data );

		if ( is_wp_error( $status ) ) {
			/**
			 * Fires when status request returns an error during daily licence checks
			 *
			 * @since 4.2.0
			 */
			do_action( 'gplvault_daily_license_check_failed', $status );
			$log_data['message'] = sprintf( 'Status check request failed. Error: %s', $status->get_error_message() );
			$logger->error( $log_pattern, $log_data );
		} else {
			/**
			 * Fires when status request returns a success response
			 *
			 * @since 4.2.0
			 */
			do_action( 'gplvault_daily_license_check_success', $status );
			if ( isset( $status['data'] ) ) {
				gv_settings_manager()->save_license_status( $status['data'] );
			}
			$log_data['message'] = 'Status check is completed successfully.';
			$logger->info( $log_pattern, $log_data );
		}
	}

	public function cleanup_log_files() {
		// gplvault_clean_up_logs
		$logger              = gv_new_logger( 'cron-actions' );
		$log_pattern         = '{message} Handler: "{handler}" Hooked: "{hook}"';
		$log_data            = array(
			'message' => '',
			'handler' => __METHOD__,
			'hook'    => 'gplvault_clean_up_logs',
		);
		$log_data['message'] = 'Log files clean up action is called.';
		$logger->info( $log_pattern, $log_data );

		$duration   = defined( 'GPLVAULT_LOG_STORAGE_DURATION' )
			? (int) constant( 'GPLVAULT_LOG_STORAGE_DURATION' )
			: ( 7 * DAY_IN_SECONDS );
		$duration   = $duration > ( 2 * DAY_IN_SECONDS )
			? $duration
			: ( 7 * DAY_IN_SECONDS );
		$keep       = time() - $duration;
		$target_dir = untrailingslashit( GV_UPDATER_LOG_DIR );
		foreach ( glob( "$target_dir/*.log" ) as $file ) {
			if ( ! is_dir( $file ) && filemtime( $file ) < $keep ) {
				unlink( $file );
			}
		}
		$log_data['message'] = 'Log files clean up action is completed.';
		$logger->info( $log_pattern, $log_data );
	}

	public function update_schema() {
		$logger              = gv_new_logger( 'cron-actions' );
		$log_pattern         = '{message} Handler: "{handler}" Hooked: "{hook}"';
		$log_data            = array(
			'message' => '',
			'handler' => __METHOD__,
			'hook'    => 'gplvault_six_hours_cron',
		);
		$log_data['message'] = 'Schema update action is called.';
		$logger->info( $log_pattern, $log_data );

		if ( gv_settings_manager()->license_is_activated() ) {
			$schema = gv_api_manager()->schema();
			if ( is_wp_error( $schema ) ) {
				$log_data['message'] = sprintf( 'Schema request failed. Error: %s', $schema->get_error_message() );
				$logger->error( $log_pattern, $log_data );
			}

			if ( ! is_wp_error( $schema ) ) {
				$this->update_plugins( $schema );

				$this->update_themes( $schema );

				$log_data['message'] = 'Schema update is successfully completed.';
				$logger->info( $log_pattern, $log_data );
			}
		}
	}

	private function update_plugins( $schema ) {
		$decoded_plugins = ! empty( $schema['plugins'] ) ? $schema['plugins'] : array();
		gv_settings_manager()->update_plugins_catalog( $decoded_plugins );
	}

	private function update_themes( $schema ) {
		$decoded_themes = ! empty( $schema['themes'] ) ? $schema['themes'] : array();
		gv_settings_manager()->update_themes_catalog( $decoded_themes );
	}

	public function load_initial_schema() {
		$schema = gv_api_manager()->schema();
		if ( ! is_wp_error( $schema ) ) {
			$this->update_plugins( $schema );
			$this->update_themes( $schema );
			GPLVault_Admin::gv_update_plugins();
		}
	}

	public function cron_schedules( $schedules ) {
		$schedules['gv_fourtimes'] = array(
			'interval' => 6 * HOUR_IN_SECONDS,
			'display'  => __( 'GPLVault Four Times Daily', 'gplvault' ),
		);

		$schedules['gv_thrice'] = array(
			'interval' => 8 * HOUR_IN_SECONDS,
			'display'  => __( 'GPLVault Three Times Daily', 'gplvault' ),
		);

		$schedules['gv_daily'] = array(
			'interval' => DAY_IN_SECONDS,
			'display'  => __( 'GPLVault Daily', 'gplvault' ),
		);

		return $schedules;
	}

	public function gv_initialize_cron() {
		if ( ! wp_next_scheduled( 'gplvault_six_hours_cron' ) && ! wp_installing() ) {
			wp_schedule_event( time(), 'gv_fourtimes', 'gplvault_six_hours_cron' );
		}

		if ( ! wp_next_scheduled( 'gplvault_status_check' ) && ! wp_installing() ) {
			wp_schedule_event( time(), 'gv_daily', 'gplvault_status_check' );
		}
		if ( wp_next_scheduled( 'gplvault_licence_check' ) && ! wp_installing() ) {
			wp_clear_scheduled_hook( 'gplvault_licence_check' );
		}

		if ( ! wp_next_scheduled( 'gplvault_fetch_client_schema' ) && ! wp_installing() ) {
			wp_schedule_event( time(), 'gv_thrice', 'gplvault_fetch_client_schema' );
		}

		if ( ! wp_next_scheduled( 'gplvault_clean_up_logs' ) && ! wp_installing() ) {
			wp_schedule_event( time() + 300, 'weekly', 'gplvault_clean_up_logs' );
		}
	}

	public function user_subs_pending_notice() {
		include GV_UPDATER_STATIC_PATH . 'notices/notice-pending-subscription.php';
	}

	/**
	 * @param int $rand_span
	 * @return int
	 */
	private static function getRandomDuration( $min, $max ) {
		$rand_span = rand( $min, $max ); // @phpcs:ignore WordPress.WP.AlternativeFunctions.rand_rand

		return $rand_span * MINUTE_IN_SECONDS;
	}

	private function dismiss_third_party_notices() {
		if ( ! gv_settings_manager()->license_is_activated() ) {
			return;
		}
		// Disable Brainstorm Force license notices
		add_action( 'admin_notices', array( $this, 'gv_discard_bsf_update_notices' ), -10 );

		// Disable Elementor Pro license notices
		add_action( 'after_setup_theme', array( $this, 'gv_discard_elementor_update_notices' ), PHP_INT_MAX );
	}

	public function gv_discard_bsf_update_notices() {
		define( 'BSF_PRODUCTS_NOTICES', false );

	}

	public function gv_discard_elementor_update_notices() {
		if ( class_exists( '\ElementorPro\Plugin', false ) ) {
			remove_action( 'admin_notices', array( \ElementorPro\Plugin::instance()->license_admin, 'admin_license_details' ), 20 );
		}
	}

	/**
	 * Get the path to something in the plugin dir.
	 *
	 * @param string $tail End of the path.
	 *
	 * @return string
	 */
	public function path( $tail = '' ) {
		return untrailingslashit( dirname( GV_UPDATER_FILE ) ) . $tail;
	}

	/**
	 * Get the path to something in the plugin admin dir.
	 *
	 * @param string $tail End of the path.
	 *
	 * @return string
	 */
	public function admin_path( $tail = '' ) {
		return $this->path( '/admin' . $tail );
	}

	/**
	 * Get the path to something in the plugin includes dir.
	 *
	 * @param string $tail End of the path.
	 * @return string
	 */
	public function includes_path( $tail = '' ) {
		return $this->path( '/includes' . $tail );
	}

	/**
	 * Get the URL to something in the plugin dir.
	 *
	 * @param string $tail End of the URL
	 * @return string
	 */
	public function url( $tail = '' ) {
		return untrailingslashit( plugin_dir_url( $this->plugin_basename ) ) . $tail;
	}

	/**
	 * Get the URL to something in the plugin admin dir.
	 *
	 * @param string $tail End of the URL
	 * @return string
	 */
	public function admin_assets_url( $tail = '' ) {
		return $this->url( '/admin/assets' . $tail );
	}

	public function server_monitor_cron() {
		if ( wp_next_scheduled( 'gplvault_six_hours_cron' ) ) {
			wp_clear_scheduled_hook( 'gplvault_six_hours_cron' );
		}

		if ( wp_next_scheduled( 'gplvault_status_check' ) ) {
			wp_clear_scheduled_hook( 'gplvault_status_check' );
		}

		if ( wp_next_scheduled( 'gplvault_fetch_client_schema' ) ) {
			wp_clear_scheduled_hook( 'gplvault_fetch_client_schema' );
		}

		if ( ! wp_next_scheduled( 'gplvault_server_check' ) ) {
			wp_schedule_single_event( time() + self::getRandomDuration( 50, 120 ), 'gplvault_server_check' );
		}
	}

	public function check_server_status() {
		wp_clear_scheduled_hook( 'gplvault_server_check' );
		$logger              = gv_new_logger( 'cron-actions' );
		$log_pattern         = '{message} Handler: "{handler}" Hooked: "{hook}"';
		$log_data            = array(
			'message' => '',
			'handler' => __METHOD__,
			'hook'    => 'gplvault_server_check',
		);
		$log_data['message'] = 'Server healthcheck process going to start.';
		$logger->info( $log_pattern, $log_data );

		// start fresh
		gv_settings_manager()->delete_api_error_response();
		gv_settings_manager()->set_origin_up_status();
		gv_settings_manager()->resume_api();

		do_action( 'gplvault/cron/server_status_checking' );
		// get new response from server
		$response = gv_api_manager()->healthcheck();

		if ( is_wp_error( $response ) ) {
			if ( gv_settings_manager()->is_origin_down() || gv_settings_manager()->is_api_paused() ) {
				wp_schedule_single_event( time() + self::getRandomDuration( 50, 120 ), 'gplvault_server_check' );
			}

			$log_data['message'] = sprintf( 'Server healthcheck request failed. Error: %s', $response->get_error_message() );
			$logger->error( $log_pattern, $log_data );
		} else {
			$this->gv_initialize_cron();

			$log_data['message'] = 'Server healthcheck completed successfully.';
			$logger->info( $log_pattern, $log_data );
		}

		do_action( 'gplvault/cron/server_status_checked', $response );
	}
}
