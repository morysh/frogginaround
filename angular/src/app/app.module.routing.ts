import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './modules/loading/loading.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { WordpressPostResolver } from './resolvers/wordpress-post.resolver';
import { WordpressPreviewsResolver } from './resolvers/wordpress-previews.resolver';
import { WordpressRoutingResolver } from './resolvers/wordpress-routing.resolver';

const routes: Routes = [
  {
    path: 'previews',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
    resolve: {
      previews: WordpressPreviewsResolver,
    },
  },
  {
    path: 'single/:id',
    loadChildren: () =>
      import('./modules/single/single.module').then((m) => m.SingleModule),
    resolve: {
      post: WordpressPostResolver,
    },
  },
  {
    path: 'page/:id',
    loadChildren: () =>
      import('./modules/page/page.module').then((m) => m.PageModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'error',
    component: NotFoundComponent,
  },
  {
    path: 'loading',
    component: LoadingComponent,
  },
  {
    path: '**',
    component: LoadingComponent,
    resolve: {
      error: WordpressRoutingResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [WordpressRoutingResolver],
})
export class AppRoutingModule {}
