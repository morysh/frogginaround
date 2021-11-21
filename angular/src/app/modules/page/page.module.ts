import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from 'src/app/shared/modules/base.module';
import { PageRoutingRoutingModule } from './page.module.routing';

@NgModule({
  declarations: [],
  imports: [BaseModule, PageRoutingRoutingModule],
})
export class PageModule {}
