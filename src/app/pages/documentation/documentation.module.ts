import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    SharedModule,
  ],
  declarations: [DocumentationComponent]
})
export class DocumentationModule {
}
