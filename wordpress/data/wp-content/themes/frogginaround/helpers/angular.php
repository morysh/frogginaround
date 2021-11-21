<?php

function WangularP($post_type) {
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

    echo 'home:"'.is_home().'"; front-page:"'.is_front_page().'"; single:"'.is_single().'"; category:"'.is_category().'"';
  
    // Load posts loop.
    while ( have_posts() ) {
      the_post();
?>
      <article>
        <h2><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h2>
        <p><a href="<?php echo get_category_link(get_the_category()[0]) ?>"><?php echo get_the_category()[0]->name ?></a></p>
      </article>
<?php
    }
  
    get_footer();
  }
}
