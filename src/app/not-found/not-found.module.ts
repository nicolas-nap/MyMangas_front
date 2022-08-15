import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@shared/components/layout/layout.module';
import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundComponent } from './not-found.component';
import { NotFoundContentComponent } from './_content/content.component';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule, LayoutModule],
  exports: [],
  declarations: [NotFoundComponent, NotFoundContentComponent],
  providers: [],
})
export class NotFoundModule {}
