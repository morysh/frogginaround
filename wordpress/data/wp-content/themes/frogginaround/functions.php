
<?php

require_once('wangularp.php');

add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size(480, 480, true);
add_action('rest_api_init', 'wangularp_register');
add_filter('rest_url_prefix', 'get_api_base');

function wangularp_register() {
    $controller = new Wangularp\WangularpController();
    $controller->register_routes();
}

function get_api_base($slug) { 
    return 'api';
}
