<?php 

namespace Wangularp\Model;

class Category {
  public string $name;
  public string $url;

  public function __construct(\WP_Term $category) {
    $this->name = $category->name;
    $this->url = get_term_link($category);
  }
}
