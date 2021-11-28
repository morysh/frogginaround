<?php 

namespace Wangularp\Model;

require_once __DIR__.'/category.class.php';
require_once __DIR__.'/tag.class.php';

class Base_Post {
  public string $title;
  // Category[]
  public array $categories;
  // Tag[]
  public array $tags;
  public string $link;
  public string $publishDate;

  public function __construct(\WP_Post $post) {
    $this->title = $post->post_title;
    foreach(get_the_category($post) as $category) {
      $this->categories[] = new Category($category);
    }
    foreach(get_the_tags($post) as $tag) {
      $this->tags[] = new Tag($tag);
    }
    $this->link = get_the_permalink($post);
    $this->publishDate = get_the_time('c', $post);
  }
}
