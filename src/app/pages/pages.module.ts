import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [
    PagesComponent,
  ],
  declarations: [PagesComponent]
})
export class PagesModule {
}
