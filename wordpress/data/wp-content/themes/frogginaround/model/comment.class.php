<?php 

namespace Wangularp\Model;

require_once __DIR__.'/category.class.php';
require_once __DIR__.'/tag.class.php';

use DateTime;
use DateTimeZone;

class Comment {
  public int $id;
  public string $date;
  public string $author;
  public string $avatar;
  public string $content;
  public int $parent;
  public int $postId;

  public function __construct(\WP_Comment $comment) {
    $this->id = $comment->comment_ID;
    $this->date = (new DateTime($comment->comment_date_gmt, new DateTimeZone('GMT')))->format('c');
    $this->author = $comment->comment_author;
    $this->avatar = get_avatar_url($comment, array('size' => 32, 'default' => 'monsterid'));
    $this->content = $comment->comment_content;
    if ($comment->comment_parent != 0) {
      $this->parent = $comment->comment_parent;
    }
    $this->postId = $comment->comment_post_ID;
  }
}
