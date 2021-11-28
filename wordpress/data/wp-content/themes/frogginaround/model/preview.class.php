<?php 

namespace Wangularp\Model;

require_once __DIR__.'/base_post.class.php';
require_once __DIR__.'/category.class.php';
require_once __DIR__.'/tag.class.php';

class Preview extends Base_Post {
  public string $excerpt;
  public string $thumbnail;

  public function __construct(\WP_Post $post) {
    parent::__construct($post);
    $this->excerpt = get_the_excerpt($post);
    $this->thumbnail = get_the_post_thumbnail_url($post, 'post-thumbnail');
  }
}
