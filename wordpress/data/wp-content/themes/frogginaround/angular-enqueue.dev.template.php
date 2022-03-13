<?php

function frogginaround_enqueue() {
    wp_enqueue_style('fa-styles', get_template_directory_uri() . '/angular/${styles}');
    wp_enqueue_script('runtime', get_template_directory_uri() . '/angular/${runtime}', array(), false, true);
    wp_enqueue_script('polyfills', get_template_directory_uri() . '/angular/${polyfills}', array(), false, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/angular/${main}', array(), false, true);
}