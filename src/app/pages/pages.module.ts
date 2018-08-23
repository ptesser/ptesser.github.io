import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ],
  exports: [
    PagesComponent,
  ],
  declarations: [PagesComponent]
})
export class PagesModule {
}
