=== Contact Form 7 - Dynamic Text Extension ===
Contributors: sevenspark, tessawatkinsllc
Donate link: https://just1voice.com/donate/
Tags: Contact Form 7, autofill, prepopulate, input, form field, contact form, text, hidden, input, dynamic, GET, POST, title, slug, auto-fill, pre-populate
Tested up to: 6.3
Stable tag: 4.0.0

This plugin provides additional form tags for the Contact Form 7 plugin. It allows dynamic generation of content for text-based input fields like text, hidden, and email, checkboxes, radio buttons, and drop-down selections using any shortcode.

== Description ==

Contact Form 7 is an excellent WordPress plugin and one of the top choices of free WordPress plugins for contact forms. Contact Form 7 - Dynamic Text Extension (DTX) makes it even more awesome by adding dynamic content capabilities. While default values in Contact Form 7 are static, DTX lets you create pre-populated fields pulled from other locations. Some examples might include:

* Auto-filling a URL or just getting the domain name or path
* Auto-filling a post ID, title, or slug
* Auto-filling a title, URL, or slug for the current page
* Pre-populating a product number
* Referencing other content on the site
* Populating with post or page info
* Populating with the current user's info
* Populating with custom and meta fields
* Generating unique identifiers for support tickets
* Getting a list of post categories or other custom taxonomies
* Getting a value from a cookie
* Getting custom theme modifications
* Any value using custom shortcodes

For over 10 years, DTX only handled `<input type="text" />` and `<input type="hidden" />` form fields, but version 4 finally introduces more:

* email
* URL
* tel (for phone numbers)
* number
* range (slider)
* textarea (multiline text)
* drop-down menu (select field)
* checkboxes
* radio buttons
* date
* submit (yes, a submit button where you can have dynamic text!)

The possibilities are endless!

## WHAT DOES IT DO? ##

DTX provides flexibility to WordPress users in creating dynamic forms in Contact Form 7. DTX comes with several built-in shortcodes that will allow the contact form to be populated from HTTPS GET variable or any info from the `get_bloginfo()` function, among others. See below for included shortcodes.

Don't see the shortcode you need on the list? You can write a [custom one](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/custom-shortcodes/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)! Any shortcode that returns a string or numeric value can be used here. The included shortcodes just cover the most common scenarios, but DTX provides the flexibility for you to grab any value you have access to programmatically.

= Dynamic Value =

The bread and butter of this plugin, set a dynamic value! This field can take any shortcode, with two important provisions:

1. The shortcode should NOT include the normal square brackets (`[` and `]`). So, instead of `[CF7_GET key='value']` you would use `CF7_GET key='value'`.
1. Any parameters in the shortcode must use single quotes. That is: `CF7_GET key='value'` and not `CF7_GET key="value"`

= Dynamic Placeholder =

Set a dynamic placeholder with this attribute! This feature accepts static text or a shortcode. If using a shortcode, the same syntax applies from the dynamic value field. However, this field also has a few more needs:

1. The text/shortcode must first have apostrophes converted to it's HTML entity code, `&#39;`
1. After that, it must be URL encoded so that spaces become `%20` and other non-alphanumeric characters are converted.

If you're using Contact Form 7's tag generator to create the form tag, those extra needs are already taken care of. Dynamic placeholders are not available for dynamic hidden form tags.

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-attribute-placeholder/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Compatible with Caching Plugins =

DTX is cache friendly! You can set a field to be calculated after the page loads by setting the `dtx_pageload` attribute to any dynamic form tag.

Many websites use caching plugins to optimize for performance. If your website caches the HTML of the form, then any dynamic form fields you have get their first calculated value cached alongside it. This becomes an issue if you're using DTX to pull values from a cookie or the current URL's query string.

This is best for dynamic form fields that:

* gets the current URL
* gets a value from the URL query
* gets a value from a cookie
* gets the current user's info
* generates a unique identifier (GUID)

For dynamic fields that are page-specific, it's perfectly safe to cache those values. For example, dynamic form fields that:

* getting the page or post's ID, title, or slug
* getting post meta for the current page
* getting the post's assigned categories, tags, or other custom taxonomy
* getting site info
* getting theme modification values

*Note: Enabling a dynamic field to be calculated after the page loads will add frontend JavaScript. Depending on the shortcode used as the dynamic value, an AJAX call to the server may be sent to be processed. The script is minified and loaded in the footer and is deferred, minimizing impact on site performance and the AJAX calls are called asynchronously to avoid being a render-blocking resource and minimizing main-thread work. The script itself can be safely cached too.*

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tag-attribute-after-page-load/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Read Only Form Fields =

Check this box if you do not want to let users edit this field. It will add the `readonly` attribute to the input form field. This feature is not available for dynamic hidden form tags.

= Obfuscate Values for Enhanced Privacy =

If you're pre-filling a form field with an email address, bots can scrape that value from the page and use it for spam. You can add an additional layer of protecting by obfuscating the value, which turns each character into it's ASCII code. To the human eye, it looks like the character it's supposed to be because browsers will render the ASCII code, but for bots, it won't look like an email address!

## HOW TO USE IT ##

After installing and activating the plugin, you will have 2 new tag types to select from when creating or editing a Contact Form 7 form: the dynamic text field and dynamic hidden field. Most of the options in their tag generators will be familiar to Contact Form 7 users but there have been some upgrades.

= How to Obfuscate Values =

All of the shortcodes included with the DTX plugin allow the `obfuscate` attribute that you can set to any truthy value to provide an additional layer of security for sensitive data.

The Contact Form 7 tag with obfuscation turned on would look like this: `[dynamictext user_email "CF7_get_current_user key='user_email' obfuscate='on'"]`

= How to Enable Cache-Friendly Mode =

All of the dynamic form tags can be enabled for processing on the frontend of the website, or the client-side, by adding the `dtx_pageload` attribute to the Contact Form 7 form tag.

In the form editor of Contact Form 7, your form tag would look like: `[dynamictext current_url dtx_pageload "CF7_URL"]`

If using the tag generator, it's as simple as checking a box!

## INCLUDED SHORTCODES ##

The plugin includes several shortcodes for use with the Dynamic Text Extension right out of the box. You can write your own as well—any self-closing shortcode will work, even with attributes!

= Current URL or Part =

Retrieve the current URL: `CF7_URL`

In the form editor of Contact Form 7, your form tag would look like: `[dynamictext dynamicname "CF7_URL"]`

Optional parameter: `part`, which will return a parsed part of the URL.  Valid values are `host`, `query`, and `path`

Host: Just the domain name and tld
`[dynamictext host "CF7_URL part='host'"]`

Query: The query string after the ?, if one exists
`[dynamictext query "CF7_URL part='query'"]`

Path: The URL path, for example, /contact, if one exists
`[dynamictext path "CF7_URL part='path'"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-current-url/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Referrer URL =

Get the referral URL, if it exists. Note that this is not necessarily reliable as not all browsers send this data.

CF7 Tag: `[dynamictext dynamicname "CF7_referrer"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-referrer-url/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Current Page Variables =

Retrieve information about the current page that the contact form is displayed on. Works great for use in templated areas like the site header, footer, widget, or sidebar! The shortcode works as follows:

Built-in shortcode: `CF7_get_current_var`

Required attribute: `key`

Possible values for `key` include:

* `id`
* `title`
* `url` (an alias for `CF7_URL`)
* `slug`
* `featured_image`
* `terms` (an alias for `CF7_get_taxonomy`)

For pages that use a `WP_POST` object, this acts as an alias for `CF7_get_post_var` so those attributes work here as well.

For author pages, this acts as an alias for `CF7_get_current_user` so those attributes work here as well.

In the form editor of Contact Form 7, your form tag's value could look like: `CF7_get_current_var key='title'`

And then the full form tag would be: `[dynamictext dynamicname "CF7_get_current_var key='title'"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-current-variables/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Post/Page Info =

Retrieve information about the current post or page (must be for a WP_POST object) that the contact form is displayed on. The shortcode works as follows:

`CF7_get_post_var key='title'`      <-- retrieves the Post's Title
`CF7_get_post_var key='slug'`       <-- retrieves the Post's Slug

You can also retrieve any parameter from the global `$post` object. Just set that as the `key` value, for example `post_date`

The Contact Form 7 Tag would look like: `[dynamictext dynamicname "CF7_get_post_var key='title'"]`

Need to pull data from a _different_ post/page? Not a problem! Just specify it's post ID like this:

Dynamic value: `CF7_get_post_var key='title' post_id='245'`

Contact Form 7 Tag: `[dynamictext dynamicname "CF7_get_post_var key='title' post_id='245'"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-post-page-variables//?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Post Meta & Custom Fields =

Retrieve custom fields from the current post/page. Just set the custom field as the key in the shortcode.

The dynamic value input becomes: `CF7_get_custom_field key='my_custom_field'`

And the tag looks like this: `[dynamictext dynamicname "CF7_get_custom_field key='my_custom_field'"]`

For the purposes of including an email address, you can obfuscate the custom field value by setting obfuscate='on' in the shortcode like this:
`[dynamictext dynamicname "CF7_get_custom_field key='my_custom_field' obfuscate='on'"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-post-meta-custom-fields/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Featured Images & Media Attachments =

Retrieve the current post's featured image, the featured image of a different page, or any attachment from the Media Library with this shortcode!

The base shortcode is simply: `CF7_get_attachment` which returns the absolute URL of the current page's featured image.

By setting the `post_id` attribute to a post ID, you can get the featured image of another page.

By setting the `id` attribute to an attachment ID, you can get the absolute URL of any image uploaded to your WordPress website.

By setting the `size` attribute to any size registered on your website, you can get a specific image size.

Want to return the attachment ID instead of the URL? Also not a problem! Just set `return='id'` in the shortcode.

Most of the optional attributes can be used at the same time. For example, if I wanted to retrieve the attachment ID of a featured image for a different post, then the dynamic text form tag would look like this:
`[dynamictext input_name "CF7_get_attachment post_id='123' return='id'"]`

If I wanted to get a specific image at a specific size, I can use this:
`[dynamictext input_name "CF7_get_attachment id='123' size='thumbnail'"]`

The only two attributes that can’t play together is `id` and `post_id`. If both are specified, it will get the attachment specified by `id` and completely ignore the `post_id` attribute. If neither are specified, then it looks to the current featured image assigned to the global `$post` object.

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-media-attachment/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Current User Info & User Meta =

Get data about the current logged-in user.

Dynamic value: `CF7_get_current_user key='user_displayname'`
CF7 Tag: `[dynamictext dynamicname "CF7_get_current_user"]`

Valid values for `key` include:

* `ID`
* `user_login`
* `display_name`
* `user_email`
* `user_firstname`
* `user_lastname`
* `user_description`

But also custom meta user keys!

For the purposes of including an email address, you can obfuscate the value by setting obfuscate='on' in the shortcode like this:
`[dynamictext dynamicname "CF7_get_current_user key='user_email' obfuscate='on'"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-current-user-user-meta/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Site/Blog Info =

Want to grab some information from your blog like the URL or the site name? Use the `CF7_bloginfo` shortcode. For example, to get the site's URL:

Enter the following into the "Dynamic Value" input: `CF7_bloginfo show='url'`

Your Content Form 7 Tag will look something like this: `[dynamictext dynamicname "CF7_bloginfo show='url'"]`

Your form's dynamicname text input will then be pre-populated with your site's URL

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-site-blog-information/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Theme Options =

Want to retrieve values from your active theme's Customizer? Now you can with the `CF7_get_theme_option` shortcode.

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-theme-option/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= HTTP GET Variables =

Want to use a variable from the PHP `$_GET` array? Just use the `CF7_GET` shortcode. For example, if you want to get the foo parameter from the url
`http://mysite.com?foo=bar`

Enter the following into the "Dynamic Value" input: `CF7_GET key='foo'`

Your Content Form 7 Tag will look something like this: `[dynamictext dynamicname "CF7_GET key='foo'"]`

Your form's dynamicname text input will then be pre-populated with the value of `foo`, in this case, `bar`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-php-get-variables/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= HTTP POST Variables =

Grab variables from the PHP `$_POST` array. The shortcode is much like the GET shortcode:

Dynamic value: `CF7_POST key='foo'`

Your Content Form 7 Tag will look something like this: `[dynamictext dynamicname "CF7_POST key='foo'"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-php-post-variables/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= Cookie Values =

If your WordPress website uses cookies, you might want to pull the value of a specific cookie into a form. You can do that with the `CF7_get_cookie` shortcode. It only needs a `key` attribute.

Dynamic value: `CF7_get_cookie key='foo'`

Your Content Form 7 Tag will look something like this: `[dynamictext dynamicname "CF7_get_cookie key='foo'"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-cookie/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

= GUID =

Generate a globally unique identifier (GUID) in a form field. This is a great utility shortcode for forms that need unique identifiers for support tickets, receipts, reference numbers, etc., without having to expose personally identifiable information (PII). This shortcode takes no parameters: `CF7_guid`

In the form editor of Contact Form 7, your form tag would look like: `[dynamictext dynamicname "CF7_guid"]`

Learn more and see examples from [the DTX Knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-guid/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

== Installation ==

There are three (3) ways to install my plugin: automatically, upload, or manually.

= Install Method 1: Automatic Installation =

Automatic installation is the easiest option as WordPress handles the file transfers itself and you don’t need to leave your web browser.

1. Log in to your WordPress dashboard.
1. Navigate to **Plugins > Add New**.
1. Where it says “Keyword” in a dropdown, change it to “Author”
1. In the search form, type “TessaWatkinsLLC” (results may begin populating as you type but my plugins will only show when the full name is there)
1. Once you’ve found my plugin in the search results that appear, click the **Install Now** button and wait for the installation process to complete.
1. Once the installation process is completed, click the **Activate** button to activate my plugin.

= Install Method 2: Upload via WordPress Admin =

This method involves is a little more involved. You don’t need to leave your web browser, but you’ll need to download and then upload the files yourself.

1. [Download my plugin](https://wordpress.org/plugins/contact-form-7-dynamic-text-extension/) from WordPress.org; it will be in the form of a zip file.
1. Log in to your WordPress dashboard.
1. Navigate to **Plugins > Add New**.
1. Click the **Upload Plugin** button at the top of the screen.
1. Select the zip file from your local file system that was downloaded in step 1.
1. Click the **Install Now** button and wait for the installation process to complete.
1. Once the installation process is completed, click the **Activate** button to activate my plugin.

= Install Method 3: Manual Installation =

This method is the most involved as it requires you to be familiar with the process of transferring files using an SFTP client.

1. [Download my plugin](https://wordpress.org/plugins/contact-form-7-dynamic-text-extension/) from WordPress.org; it will be in the form of a zip file.
1. Unzip the contents; you should have a single folder named `contact-form-7-dynamic-text-extension`.
1. Connect to your WordPress server with your favorite SFTP client.
1. Copy the folder from step 2 to the `/wp-content/plugins/` folder in your WordPress directory. Once the folder and all of its files are there, installation is complete.
1. Now log in to your WordPress dashboard.
1. Navigate to **Plugins > Installed Plugins**. You should now see my plugin in your list.
1. Click the **Activate** button under my plugin to activate it.

== Screenshots ==

1. Screenshot of the form tag buttons in the form editor of Contact Form 7. The dynamic buttons appear in purple instead of blue to visually set them apart.
2. The form tag generator screen for the dynamic text form tag
3. The form tag generator screen for the dynamic hidden form tag
4. The form tag generator screen for the dynamic email form tag
5. The form tag generator screen for the dynamic URL form tag
6. The form tag generator screen for the dynamic phone number (tel) form tag
7. The form tag generator screen for the dynamic number spinbox form tag
8. The form tag generator screen for the dynamic sliding range form tag
9. The form tag generator screen for the dynamic textarea form tag
10. The form tag generator screen for the dynamic drop-down menu (select) form tag
11. The form tag generator screen for the dynamic checkboxes form tag
12. The form tag generator screen for the dynamic radio buttons form tag
13. The form tag generator screen for the dynamic date form tag
14. The form tag generator screen for the dynamic submit form tag

== Frequently Asked Questions ==

Please check out the [FAQ on our website](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/frequently-asked-questions/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).

== Upgrade Notice ==

= 4.0.0 =
Major code changes and added the long-awaited dynamic form tags such as email, textarea, drop-down, and even a select button!

== Changelog ==

= 4.0.0 =

* Major: modified function names
* Major: deprecated `dynamictext` and `dynamichidden` form tags in favor of `dynamic_text` and `dynamic_hidden`. For more information, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_email` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-email/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_url` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-url/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_tel` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-tel/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_number` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-number/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_range` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-range/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_textarea` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-textarea/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_select` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-select/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_radio` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-radio/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_date` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-date/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dynamic_submit` form tag. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-submit/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dtx_hide_blank` form tag attribute for `dynamic_select`. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-select/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: introduced `dtx_disable_blank` form tag attribute for `dynamic_select`. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tags/dynamic-select/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: added mail validation for `dynamic_email` and `dynamic_hidden` for backend configuration. For more information, see the [FAQ](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/frequently-asked-questions/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: added the Akismet feature to DTX text, email, and URL form tags.
* Update: adjusted how queued values were sent for cache compatibility mode to allow for multiline values in textareas
* Removed unused utility functions

= 3.5.4 =

* Fix: Updated JavaScript to prevent cacheable fields from making unnecessary AJAX requests

= 3.5.3 =

* Update: removed the use of sessions, [see support thread](https://wordpress.org/support/topic/add-option-to-disable-session-data/)

= 3.5.2 =

* Fix: Updated the `CF7_URL` shortcode to only use `network_home_url()` for multisite installs that do not use subdomains, and use `home_url()` for all others to [maybe address this support thread](https://wordpress.org/support/topic/cf7_url-return-only-domain-and-not-subdomain/)
* Fix: Removed a lingering debug call

= 3.5.1 =

* Fix: fixed bug so tag generator for dynamic fields work on "Add New Contact Form" page of Contact Form 7
* Updated: Updated text in tag generator for cache compatible checkbox and added link to documentation

= 3.5.0 =

* Feature: Added the `dtx_pageload` form tag attribute for cache compatibility. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/form-tag-attribute-after-page-load/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Fix: Updated to be compatible with WordPress version 6.3
* Fix: Addressed a bug where `scheme` in `CF7_URL part='scheme'` was incorrectly sanitizing as URL instead of text
* Fix: Fixed `wp_kses()` in tag generator that stripped out link opening in new tab
* Update: `CF7_get_current_var` utilizes PHP session variables where appropriate
* Update: All JavaScript assets will load with the `defer` strategy in the footer in [WordPress 6.3](https://make.wordpress.org/core/2023/07/14/registering-scripts-with-async-and-defer-attributes-in-wordpress-6-3/)

= 3.4.0 =

* Feature: Added the `CF7_get_current_var` shortcode, [see support thread for user request](https://wordpress.org/support/topic/wrong-page-title-7/). For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-current-variables/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Fix: Updated the `CF7_URL` shortcode to no longer check for ports since that's handled in `network_home_url()` function, [see support thread](https://wordpress.org/support/topic/version-3-3-0-breaking/)

= 3.3.0 =

* Feature: Added the `CF7_get_cookie` shortcode. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-cookie/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: Added the `CF7_get_taxonomy` shortcode. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-taxonomy/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: Added the `CF7_get_theme_option` shortcode. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-theme-option/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: Added `wpcf7dtx_sanitize` filter that sanitizes attribute values in built-in shortcodes
* Feature: Added `wpcf7dtx_escape` filter that escapes values in built-in shortcodes
* Feature: Added `wpcf7dtx_allow_protocols` filter to customize allowed protocols in escaping URLs in built-in shortcodes
* Fix: Updated how plugin gets dynamic value in form tags, now uses `wpcf7dtx_get_dynamic()` function
* Fix: Added case-insensitive ID in `CF7_get_post_var`
* Fix: Sanitizes post variable keys as keys in `wpcf7dtx_get_post_var()`
* Fix: Updated `wpcf7dtx_get_post_id()` to pull from "the loop" if `$post` is unavailable and now used consistently across built-in shortcodes
* Fix: Updated tag markup to be compatible with Contact Form 7 version 5.6 Beta for successful form validation, [see support thread](https://wordpress.org/support/topic/required-field-no-error-is-output-when-validating-when-field-is-empty/)
* Fix: Updated the `CF7_URL` shortcode to use `network_home_url()`, [see support thread](https://wordpress.org/support/topic/current-url-not-working/)
* Fix: Updated GUID function to return appropriately escaped values
* Fix: Updated all existing built-in shortcodes to use the the sanitizing, escaping, and obfuscating shortcodes, [see support thread](https://wordpress.org/support/topic/cant-get-obfuscate-to-work/)
* Fix: Marked compatible with WordPress core version 6.2.

= 3.2 =

* Feature: Add optional 'part' parameter to CF7_URL shortcode to retrieve Host, Query, or Path from current URL
* Updated minimum PHP requirement to 7.4 moving forward
* Update branding assets
* Update Tested Up To to 6.1.1
* Plugin will now be jointly maintained by [SevenSpark](https://sevenspark.com/) and [AuRise Creative](https://aurisecreative.com)

= 3.1.3 =

* Fix: Fixed the syntax error that reappeared in 3.1.2.

= 3.1.2 =

**Release Date: January 27, 2023**

* Fix: updated the text domain to match the plugin slug
* Fix: updated all of the translated strings to match

= 3.1.1 =

**Release Date: January 26, 2023**

* Fix: Fixed the syntax error: Parse error: syntax error, unexpected `)` in /wp-content/plugins/contact-form-7-dynamic-text extension/includes/admin.php on line 212

= 3.1.0 =

**Release Date: January 25, 2023**

* Feature: Added the `CF7_get_attachment` shortcode. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-media-attachment/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: Added the `CF7_guid` shortcode. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-shortcode-guid/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme).
* Feature: Added the dynamic placeholder option to the dynamic form tags that allows you to specify dynamic or static placeholder content while also setting dynamic values. For usage details, see the [knowledge base](https://aurisecreative.com/docs/contact-form-7-dynamic-text-extension/shortcodes/dtx-attribute-placeholder/?utm_source=wordpress.org&utm_medium=link&utm_campaign=contact-form-7-dynamic-text-extension&utm_content=readme)
* Feature: Added a "required" dynamic hidden tag (e.g., `[dynamichidden* ...]`). It is identical to the original dynamic hidden tag (as in the field is not actually validated as required because it is hidden); it just doesn't break your website if you use it. This feature was requested by a user.
* Feature: Added the `obfuscate` attribute to all included shortcodes

= 3.0.0 =

**Release Date: January 17, 2023**

* Major: Plugin was adopted by AuRise Creative
* Major: All functions use the `wpcf7dtx_` prefix
* Feature: Added a `post_id` key for the `CF7_get_post_var` shortcode so you can specify a different post
* Feature: Updated the `CF7_get_current_user` shortcode to be able to pull data from user metadata too
* Feature: Added the "obfuscate" option to `CF7_get_custom_field` shortcode
* Feature: Added the "placeholder" checkbox option to the `dynamictext` tag
* Fix: Added additional validation for post ID input
* Fix: Added additional validation for the `key` attribute in the `CF7_GET` and `CF7_POST` shortcodes
* Fix: Shortcode keys are normalized into lowercase before processing
* Security: Sanitizing URLs for the `CF7_URL` and `CF7_referrer` shortcode outputs
* Feature/Security: Added a `allowed_protocols` attribute to the `CF7_URL` and `CF7_referrer` shortcodes that defaults to `http,https`

= Older Releases =

Please see our [additional changelog.txt file](https://plugins.trac.wordpress.org/browser/contact-form-7-dynamic-text-extension/trunk/changelog.txt)