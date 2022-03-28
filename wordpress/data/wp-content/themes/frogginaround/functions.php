<?php

require_once('wangularp.php');
require_once('angular-enqueue.php');

add_theme_support( 'custom-header' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );
set_post_thumbnail_size(480, 480, true);
add_action('init', 'register_menus');
add_action('rest_api_init', 'wangularp_register');
add_action('wp_enqueue_scripts', 'frogginaround_enqueue');
add_filter('rest_url_prefix', 'get_api_base');
add_filter('rest_allow_anonymous_comments','anonymous_comments');


function wangularp_register() {
    $controller = new Wangularp\WangularpController();
    $controller->register_routes();
}

function get_api_base($slug) { 
    return 'api';
}

function register_menus() {
    register_nav_menu('navigation', __('Navigation'));
}

function anonymous_comments() {
    return true;
}