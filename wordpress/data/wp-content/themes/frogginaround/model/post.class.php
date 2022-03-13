<?php 

namespace Wangularp\Model;

require_once __DIR__.'/base_post.class.php';
require_once __DIR__.'/category.class.php';
require_once __DIR__.'/tag.class.php';
require_once __DIR__.'/comment.class.php';

class Post extends Base_Post {
  public string $content;
  // Category[]
  public array $categories;
  // Tag[]
  public array $tags;
  public string $featuredMediaUrl;
  // Comment[]
  public array $comments;

  public function __construct(\WP_Post $post) {
    parent::__construct($post);
    $this->content = apply_filters('the_content', $post->post_content);
    $this->categories = [];
    foreach(get_the_category($post) as $category) {
      $this->categories[] = new Category($category);
    }
    $this->tags = [];
    foreach(get_the_tags($post) as $tag) {
      $this->tags[] = new Tag($tag);
    }
    $this->featuredMediaUrl = get_the_post_thumbnail_url($post, 'large');
    if(comments_open($post)) {
      $this->comments = [];
      $comments = get_comments(array(
        'post' => $post->ID,
        'status' => 'approve',
        'orderby'=>'comment_date',
        'order'=>'ASC'
    ));

      foreach($comments as $com) {
        $this->comments[] = new Comment($com);
      }
    }
  }
}
