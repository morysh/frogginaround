import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastType } from 'src/app/shared/model/toast.interface';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'fa-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss'],
})
export class NewCommentComponent {
  @Input() post!: number;
  @Input() parent?: number;
  @Input() label = 'Poster un commentaire';

  @Output() updated = new EventEmitter<void>();

  formGroup: FormGroup;

  constructor(private fromBuilder: FormBuilder, private httpClient: HttpClient, private toastService: ToastService) {
    this.formGroup = this.fromBuilder.group({
      author: localStorage.getItem('comment.author'),
      email: localStorage.getItem('comment.email'),
      content: '',
    });
  }

  newComment(data: any) {
    this.httpClient
      .post('/api/wp/v2/comments', {
        author_name: data.author,
        author_email: data.email,
        content: data.content,
        post: this.post,
        parent: this.parent,
      })
      .subscribe(
        (response: any) => {
          this.updated.emit();
          switch (response.status) {
            case 'approved':
              this.toastService.addToast(ToastType.SUCCESS, 'Commentaire ajouté');
              break;
            case 'hold':
              this.toastService.addToast(ToastType.SUCCESS, 'Commentaire en attente de modération');
              break;
          }
          this.formGroup.get('content')?.reset();
          document.body.classList.add('wait');
        },
        (e) => {
          this.toastService.addToast(ToastType.ERROR, "Erreur lors de l'ajout du commentaire");
          console.debug(e, e.data);
        }
      );

    localStorage.setItem('comment.author', data.author);
    localStorage.setItem('comment.email', data.email);
  }
}
