<?php 

namespace Wangularp\Model;

class Image {
  public string $title;
  public string $thumbnail;
  public string $full;

  public function __construct(\WP_Post $post) {
    $this->title = $post->post_title;
    $this->thumbnail = wp_get_attachment_image_url($post->ID, 'post-thumbnail');
    $this->full = wp_get_attachment_image_url($post->ID, 'full');
  }
}
