import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../component/modal/modal.component';
import { GalleryComponent } from '../component/gallery/gallery.component';

@NgModule({
  declarations: [ModalComponent, GalleryComponent],
  imports: [CommonModule],
  exports: [ModalComponent, GalleryComponent],
})
export class GalleryModule {}
