<?php 

namespace Wangularp\Model;

require_once __DIR__.'/base_post.class.php';
require_once __DIR__.'/category.class.php';
require_once __DIR__.'/tag.class.php';

class Post extends Base_Post {
  public string $content;
  public string $featuredMediaTag;

  public function __construct(\WP_Post $post) {
    parent::__construct($post);
    $this->content = apply_filters('the_content', $post->post_content);
    $this->featuredMediaTag = get_the_post_thumbnail($post);
  }
}
