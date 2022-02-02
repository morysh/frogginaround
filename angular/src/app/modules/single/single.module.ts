import { NgModule } from '@angular/core';
import { SingleComponent } from './single.component';
import { BaseModule } from 'src/app/shared/modules/base.module';
import { SingleRoutingModule } from './single.module.routing';
import { GalleryModule } from 'src/app/shared/modules/gallery.module';

@NgModule({
  declarations: [SingleComponent],
  imports: [BaseModule, SingleRoutingModule, GalleryModule],
})
export class SingleModule {}
