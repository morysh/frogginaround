<?php 

namespace Wangularp\Model;

class Tag {
  public string $name;
  public string $link;

  public function __construct(\WP_Term $tag) {
    $this->name = $tag->name;
    $this->link = get_term_link($tag);
  }
}