<?php if(get_field('logo', 'option') || get_field('logo_alternativo', 'option')) : ?>
    <span class="logo d-block">
        <a class="<?php echo isset($args['classes']) ? $args['classes'] : ''; ?>" title="<?php echo get_bloginfo('title'); ?>" href="<?php echo site_url(); ?>">
            <img loading="lazy" class="img-fluid" src="<?php echo get_field(did_action( 'get_footer' ) || isset($args['alt']) ? 'logo_alternativo' : 'logo', 'option'); ?>" alt="<?php echo get_bloginfo('title'); ?>">
        </a>
    </span>
<?php endif; ?>