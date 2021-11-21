import { NgModule } from '@angular/core';
import { SingleComponent } from './single.component';
import { BaseModule } from 'src/app/shared/modules/base.module';
import { SingleRoutingModule } from './single.module.routing';

@NgModule({
  declarations: [SingleComponent],
  imports: [BaseModule, SingleRoutingModule],
})
export class SingleModule {}
