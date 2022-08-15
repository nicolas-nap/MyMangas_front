import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './_footer/footer.component';
import { RouterModule } from '@angular/router';
import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LayoutComponent],
  declarations: [
    LayoutComponent,
    FooterComponent,
  ],
  providers: [LayoutService],
})
export class LayoutModule {}
