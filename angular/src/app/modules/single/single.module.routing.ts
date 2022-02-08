import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordpressPostResolver } from 'src/app/modules/single/wordpress-post.resolver';
import { SingleComponent } from './single.component';

const routes: Routes = [
  {
    path: ':id',
    component: SingleComponent,
    resolve: {
      post: WordpressPostResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleRoutingModule {}
