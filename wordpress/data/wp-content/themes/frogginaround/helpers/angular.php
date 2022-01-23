<?php

function wangularp($post_type) {
  if (strstr($_SERVER['HTTP_ACCEPT'], 'json')) {
    if ( have_posts() ) {
      echo json_encode(array(
          'id' => get_the_ID(),
          'type' => $post_type), JSON_FORCE_OBJECT);
    } else {
      echo '{}';
    }
  } else {
    get_header();
      
    echo '<app-root></app-root>';
  
    get_footer();
  }
}
