import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/shared/model/comment.interface';

@Component({
  selector: 'fa-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  reply = false;

  @Output() updated = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  updateComments() {
    this.updated.emit();
  }
}
