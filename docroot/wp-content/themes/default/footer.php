    </main>
    <footer class="footer mt-auto">
        <?php get_sidebar("footer"); ?>
        <div class="footer-bottom">
            <div class="container d-flex align-items-stretch flex-column flex-xl-row flex-wrap">
                <div class="col-12 text-center text-xl-start col-xl-4">
                    <?php get_template_part('template_parts/_logo', null, array( )); ?>
                    <?php if(get_bloginfo('description')) : ?>
                        <p class="mt-4 col-12 col-md-5 m-auto col-xl-auto"><?php echo get_bloginfo('description');?></p>
                    <?php endif; ?>
                    <p class="copyright mt-5 pt-5 d-none d-xl-block">Desenvolvido a mão por <a href="https://904.ag/" target="_blank">Agência 9ZERO4</a><br/>© Copyright <?php echo date('Y'); ?> - Todos os direitos reservados.</p>
                </div>
                <div class="flex-fill">
                    <ul class="shortcuts d-flex align-items-center justify-content-center justify-content-xl-between flex-wrap  flex-column flex-xl-row">
                        <?php if(get_field('contact_endereco', 'option')) : ?>
                            <li class="contact-item mt-4 mt-xl-0 address">
                                <p class="text-center text-xl-start">
                                    <a href="<?php echo get_field('contact_google_maps_link', 'option'); ?>" class="contact-info d-flex flex-wrap  flex-column flex-xl-row justify-content-center align-items-center justify-content-xl-start align-items-xl-start ">
                                        <i class="fa-solid fa-location-pin"></i>
                                        <span class="pt-3 pt-xl-0 ps-xl-3 d-inline-flex"><?php echo get_field('contact_endereco', 'option') ?></span>
                                    </a>
                                </p>
                            </li>
                        <?php endif; ?>
                        <?php if(get_field('contact_telefone', 'option')) : ?>
                            <li class="contact-item mt-4 mt-xl-0">
                                <p class="text-center text-xl-start">
                                    <a href="tel:+55<?php echo str_replace([':', '\\', '/', '*', '-', ' ', '(', ')'], '', get_field('contact_telefone', 'option')); ?>" class="contact-info d-flex flex-wrap  flex-column flex-xl-row justify-content-center align-items-center justify-content-xl-start align-items-xl-start ">
                                        <i class="fa-solid fa-phone"></i>
                                        <span class="pt-3 pt-xl-0 ps-xl-3 d-inline-flex">
                                            <?php echo get_field('contact_telefone', 'option'); ?>
                                        </span>
                                    </a>
                                </p>  
                            </li>
                        <?php endif; ?>
                        <?php if(get_field('contact_email', 'option')) : ?>
                            <li class="contact-item mt-4 mt-xl-0">
                                <p class="text-center text-xl-start">
                                    <a href="mailto:<?php echo get_field('contact_email', 'option') ?>" class="contact-info d-flex flex-wrap  flex-column flex-xl-row justify-content-center align-items-center justify-content-xl-start align-items-xl-start ">
                                        <i class="fa-solid fa-envelope"></i>
                                        <span class="pt-3 pt-xl-0 ps-xl-3 d-inline-flex">
                                            <?php echo get_field('contact_email', 'option') ?>
                                        </span>
                                    </a>
                                </p>  
                            </li>
                        <?php endif; ?>                          
                    </ul>
                    <div class="d-flex align-items-center justify-content-center flex-wrap flex-column flex-xl-row align-items-xl-stretch justify-content-xl-between">
                        <?php 
                            wp_nav_menu( 
                                array( 
                                    'theme_location' => 'footer', 
                                    'menu_class' => 'd-flex text-center text-xl-start flex-wrap flex-column flex-xl-row align-items-xl-stretch justify-content-xl-between flex-fill',   
                                    'container' => 'nav',
                                    'container_class' => 'navigation' 
                                ) 
                            ); 
                        ?>      
                        <div class="flex-fill">
                            <?php if(get_field('topbar','option')) : ?>
                                <?php get_template_part('template_parts/_topbar', null, array('data' => get_field('topbar','option') )); ?>
                            <?php endif; ?>
                            <?php get_template_part('template_parts/_socialnetworks', null, array('title' => 'Siga-nos nas redes sociais', 'classes' => 'mt-4 mt-xl-0')); ?>
                        </div>                    
                    </div>
                </div>
            </div>   
            <p class="copyright mt-4 d-xl-none text-center container">Desenvolvido a mão por <a href="https://904.ag/" target="_blank">Agência 9ZERO4</a><br/>© Copyright <?php echo date('Y'); ?> - Todos os direitos reservados.</p>
        </div>
    </footer>
    <?php get_template_part('template_parts/_whatsapp'); ?> 
</div>
<?php wp_footer(); ?>
</body>
</html>