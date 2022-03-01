<?php

require_once('wangularp.php');

add_theme_support( 'custom-header' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );
set_post_thumbnail_size(480, 480, true);
add_action('init', 'register_menus');
add_action('rest_api_init', 'wangularp_register');
add_action('wp_enqueue_scripts', 'frogginaround_enqueue');
add_filter('rest_url_prefix', 'get_api_base');

function wangularp_register() {
    $controller = new Wangularp\WangularpController();
    $controller->register_routes();
}

function get_api_base($slug) { 
    return 'api';
}

function frogginaround_enqueue() {
    wp_enqueue_style('fa-styles', get_template_directory_uri() . '/angular/styles.css');
    wp_enqueue_script('runtime', get_template_directory_uri() . '/angular/runtime.js', array(), false, true);
    wp_enqueue_script('polyfills', get_template_directory_uri() . '/angular/polyfills.js', array(), false, true);
    wp_enqueue_script('vendor', get_template_directory_uri() . '/angular/vendor.js', array(), false, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/angular/main.js', array(), false, true);
}

function register_menus() {
    register_nav_menu('navigation', __('Navigation'));
}