<?php 

namespace Wangularp\Model;

class Link {
  public string $url;
  public string $title;

  public function __construct(string $url, string $title) {
    $this->url = $url;
    $this->title = $title;
  }
}
