<?php

function wangularp($post_type, $id) {
  if (strstr($_SERVER['HTTP_ACCEPT'], 'json')) {
    echo json_encode(array(
        'id' => $id,
        'type' => $post_type), JSON_FORCE_OBJECT);
  } else {
    get_header();

    echo '<app-root></app-root>';
  
    get_footer();
  }
}
