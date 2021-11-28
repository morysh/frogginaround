<?php 

namespace Wangularp\Model;

class Tag {
  public string $name;
  public string $url;

  public function __construct(\WP_Term $tag) {
    $this->name = $tag->name;
    $this->url = get_term_link($tag);
  }
}