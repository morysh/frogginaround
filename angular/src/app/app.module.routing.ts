import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './modules/loading/loading.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { WordpressPostResolver } from './modules/single/wordpress-post.resolver';
import { WordpressRoutingResolver } from './wordpress-routing.resolver';

const routes: Routes = [
  {
    path: 'previews',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'single',
    loadChildren: () =>
      import('./modules/single/single.module').then((m) => m.SingleModule),
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./modules/single/single.module').then((m) => m.SingleModule),
  },
  {
    path: 'images',
    loadChildren: () =>
      import('./modules/images/images.module').then((m) => m.ImagesModule),
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
