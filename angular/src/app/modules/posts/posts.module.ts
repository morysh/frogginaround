import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/shared/modules/base.module';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.module.routing';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [PostsComponent, PreviewComponent],
  imports: [BaseModule, PostsRoutingModule],
})
export class PostsModule {}
