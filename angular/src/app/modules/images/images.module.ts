import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';
import { ImagesRoutingModule } from './images.module.routing';
import { GalleryModule } from 'src/app/shared/modules/gallery.module';

@NgModule({
  declarations: [ImagesComponent],
  imports: [CommonModule, ImagesRoutingModule, GalleryModule],
})
export class ImagesModule {}
