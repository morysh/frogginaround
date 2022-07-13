<?php 

namespace Wangularp\Model;

require_once __DIR__.'/base_post.class.php';
require_once __DIR__.'/category.class.php';
require_once __DIR__.'/tag.class.php';
require_once __DIR__.'/comment.class.php';
require_once __DIR__.'/link.class.php';

class Post extends Base_Post {
  public string $content;
  // Category[]
  public array $categories;
  // Tag[]
  public array $tags;
  public string $featuredMediaUrl;
  // Comment[]
  public array $comments;
  public Link $prev;
  public Link $next;

  public function __construct(\WP_Post $post) {
    parent::__construct($post);
    $this->content = apply_filters('the_content', $post->post_content);
    $this->categories = [];
    foreach(get_the_category($post) as $category) {
      $this->categories[] = new Category($category);
    }
    $this->tags = [];
    $wp_tags = get_the_tags($post);
    if(is_array($wp_tags)) {
      foreach($wp_tags as $tag) {
        $this->tags[] = new Tag($tag);
      }
    }
    $this->featuredMediaUrl = get_the_post_thumbnail_url($post, 'full');
    if(comments_open($post)) {
      $this->comments = [];
      $comments = get_comments(array(
        'post_id' => $post->ID,
        'status' => 'approve',
        'orderby'=>'comment_date',
        'order'=>'ASC'
      ));

      foreach($comments as $com) {
        $this->comments[] = new Comment($com);
      }
    }

    $GLOBALS['post'] = $post;

    $prevPost = get_previous_post();
    if($prevPost) {
      $this->prev = new Link(get_the_permalink($prevPost), $prevPost->post_title);
    }
    
    $nextPost = get_next_post();
    if($nextPost) {
      $this->next = new Link(get_the_permalink($nextPost), $nextPost->post_title);
    }
  }
}
