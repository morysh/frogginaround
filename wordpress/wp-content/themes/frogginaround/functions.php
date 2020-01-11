<?php

function load_stylsheets() {
    wp_register_style('base', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('base');

    wp_register_style('big', get_template_directory_uri() . '/assets/styles/big.css');
    wp_enqueue_style('big');
}

add_action('wp_enqueue_scripts', 'load_stylsheets');

function load_scripts() {
    wp_register_script('main', get_template_directory_uri() . '/assets/scripts/main.js');
    wp_enqueue_script('main');
}

add_action('wp_enqueue_scripts', 'load_scripts');

add_theme_support('menus');