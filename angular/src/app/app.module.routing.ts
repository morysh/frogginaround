import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { WordpressResolver } from './wordpress-resolver';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'single/:id',
    loadChildren: () =>
      import('./modules/single/single.module').then((m) => m.SingleModule),
  },
  {
    path: 'page/:id',
    loadChildren: () =>
      import('./modules/page/page.module').then((m) => m.PageModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
    resolve: {
      error: WordpressResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [WordpressResolver],
})
export class AppRoutingModule {}
