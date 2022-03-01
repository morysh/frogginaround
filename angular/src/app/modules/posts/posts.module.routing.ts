import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { WordpressCategoryResolver } from './wordpress-category.resolver';
import { WordpressPreviewsResolver } from './wordpress-previews.resolver';
import { WordpressSearchResolver } from './wordpress-search.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      previews: WordpressPreviewsResolver,
    },
  },
  {
    path: 'category/:id',
    component: PostsComponent,
    resolve: {
      category: WordpressCategoryResolver,
    },
  },
  {
    path: 'search',
    component: PostsComponent,
    resolve: {
      search: WordpressSearchResolver,
    },
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
