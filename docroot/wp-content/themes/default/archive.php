<?php get_header(); ?>
<?php 
    $banner = array_filter(get_field('banner', 'option'), function ($item) {
        return (reset($item['archive'])->name == get_queried_object()->name);
    });

    if($banner) {
        $banner = reset($banner);
        unset($banner['archive']);
        get_template_part('template_parts/_banner', null, array("data"=>$banner));
    }

    if ( have_posts() ) :
        while ( have_posts() ) :
            the_post(); 
            get_template_part('blocks/text-carousel', null, array(
                "data" => $post
            ));
        endwhile; 
    endif;
?>
<?php get_footer(); ?>