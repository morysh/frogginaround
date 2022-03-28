import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/model/comment.interface';
import { WordpressService } from 'src/app/shared/services/wordpress.service';

@Component({
  selector: 'fa-comment-feed',
  templateUrl: './comment-feed.component.html',
  styleUrls: ['./comment-feed.component.scss'],
})
export class CommentFeedComponent implements OnInit {
  @Input() post!: number;
  @Input() comments!: Comment[];

  constructor(private wordpressService: WordpressService) {}

  ngOnInit(): void {}

  updateComments() {
    this.wordpressService.getComments$(this.post).subscribe((coms) => {
      this.comments = coms;
      document.body.classList.remove('wait');
    });
  }
}
