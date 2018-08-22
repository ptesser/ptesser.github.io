import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgTemplateAndContainerComponent } from './ng-template-and-container.component';

const routes: Routes = [
  {
    path: '',
    component: NgTemplateAndContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateAndContainerRoutingModule { }
