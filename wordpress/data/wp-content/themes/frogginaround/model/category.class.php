<?php 

namespace Wangularp\Model;

class Category {
  public string $name;
  public string $link;

  public function __construct(\WP_Term $category) {
    $this->name = $category->name;
    $this->link = get_term_link($category);
  }
}
