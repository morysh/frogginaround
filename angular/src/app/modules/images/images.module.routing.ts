import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images.component';
import { WordpressImagesResolver } from './wordpress-images.resolver';

const routes: Routes = [
  {
    path: '',
    component: ImagesComponent,
    resolve: {
      images: WordpressImagesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesRoutingModule {}
