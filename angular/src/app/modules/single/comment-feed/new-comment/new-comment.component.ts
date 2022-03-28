import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fa-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss'],
})
export class NewCommentComponent implements OnInit {
  @Input() post!: number;
  @Input() parent?: number;
  @Input() label = 'Poster un commentaire';

  @Output() updated = new EventEmitter<void>();

  formGroup: FormGroup;

  constructor(private fromBuilder: FormBuilder, private httpClient: HttpClient) {
    this.formGroup = this.fromBuilder.group({
      author: localStorage.getItem('comment.author'),
      email: localStorage.getItem('comment.email'),
      content: '',
    });
  }

  ngOnInit(): void {}

  newComment(data: any) {
    const formData = new FormData();

    formData.append('comment_post_ID', this.post.toString());
    formData.append('author', data.author);
    formData.append('email', data.email);
    formData.append('comment', data.content);
    this.parent ? formData.append('comment_parent', this.parent.toString()) : undefined;

    this.httpClient
      .post('/api/wp/v2/comments', {
        author_name: data.author,
        author_email: data.email,
        content: data.content,
        post: this.post,
        parent: this.parent,
      })
      .subscribe(
        () => {
          this.updated.emit();
          document.body.classList.add('wait');
        },
        (e) => {
          alert('Erreur');
          console.debug(e, e.data);
        }
      );

    localStorage.setItem('comment.author', data.author);
    localStorage.setItem('comment.email', data.email);
  }
}
