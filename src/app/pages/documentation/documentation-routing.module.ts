import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './documentation.component';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
