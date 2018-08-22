import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateAndContainerRoutingModule } from './ng-template-and-container-routing.module';
import { NgTemplateAndContainerComponent } from './ng-template-and-container.component';

@NgModule({
  imports: [
    CommonModule,
    NgTemplateAndContainerRoutingModule
  ],
  declarations: [NgTemplateAndContainerComponent]
})
export class NgTemplateAndContainerModule { }
