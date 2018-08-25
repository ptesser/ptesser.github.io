import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { NgTemplateAndContainerRoutingModule } from './ng-template-and-container-routing.module';
import { NgTemplateAndContainerComponent } from './ng-template-and-container.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule,
    NgTemplateAndContainerRoutingModule
  ],
  declarations: [NgTemplateAndContainerComponent]
})
export class NgTemplateAndContainerModule { }
