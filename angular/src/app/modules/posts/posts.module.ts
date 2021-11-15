import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/shared/modules/base.module';
import { PostsComponent } from './posts.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostsRoutingModule } from './posts.module.routing';

@NgModule({
  declarations: [PostsComponent, PostThumbnailComponent],
  imports: [BaseModule, PostsRoutingModule],
})
export class PostsModule {}
