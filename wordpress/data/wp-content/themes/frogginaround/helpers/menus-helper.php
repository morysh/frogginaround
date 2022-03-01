<?php

function get_js_menus() {
  $menus = '{';
  foreach(get_nav_menu_locations() as $location => $id) {
    $menus .= "$location:[";
    foreach(wp_get_nav_menu_items($id) as $item) {
      $menus .= "{title:'".str_replace('\'', '\\\'', $item->title)."',link:new URL('$item->url', ORIGIN)},";
    }
    $menus .= ']';
  }

  $menus .= '}';
  return $menus;
}