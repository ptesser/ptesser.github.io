import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxiliaryRoutesRoutingModule } from './auxiliary-routes-routing.module';
import { AuxiliaryRoutesComponent } from './auxiliary-routes.component';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild(),
    AuxiliaryRoutesRoutingModule
  ],
  declarations: [AuxiliaryRoutesComponent]
})
export class AuxiliaryRoutesModule { }
