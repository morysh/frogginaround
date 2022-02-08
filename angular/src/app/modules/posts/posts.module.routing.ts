import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordpressCategoryResolver } from 'src/app/modules/posts/wordpress-category.resolver';
import { WordpressPreviewsResolver } from 'src/app/modules/posts/wordpress-previews.resolver';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: 'category/:id',
    component: PostsComponent,
    resolve: {
      previews: WordpressCategoryResolver,
    },
  },
  {
    path: '',
    component: PostsComponent,
    resolve: {
      previews: WordpressPreviewsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
