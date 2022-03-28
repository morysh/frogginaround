import { NgModule } from '@angular/core';
import { SingleComponent } from './single.component';
import { BaseModule } from 'src/app/shared/modules/base.module';
import { SingleRoutingModule } from './single.module.routing';
import { GalleryModule } from 'src/app/shared/modules/gallery.module';
import { CommentFeedComponent } from './comment-feed/comment-feed.component';
import { CommentComponent } from './comment-feed/comment/comment.component';
import { NewCommentComponent } from './comment-feed/new-comment/new-comment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SingleComponent,
    CommentFeedComponent,
    CommentComponent,
    NewCommentComponent,
  ],
  imports: [
    BaseModule,
    SingleRoutingModule,
    GalleryModule,
    ReactiveFormsModule,
  ],
})
export class SingleModule {}
