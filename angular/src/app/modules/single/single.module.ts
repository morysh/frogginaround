import { NgModule } from '@angular/core';
import { SingleComponent } from './single.component';
import { BaseModule } from 'src/app/shared/modules/base.module';
import { SingleRoutingModule } from './single.module.routing';
import { GalleryModule } from 'src/app/shared/modules/gallery.module';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [SingleComponent],
  imports: [BaseModule, SingleRoutingModule, GalleryModule, LoadingModule],
})
export class SingleModule {}
