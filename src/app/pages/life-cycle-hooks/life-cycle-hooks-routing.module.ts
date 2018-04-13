import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';

const routes: Routes = [
  {
    path: '',
    component: LifeCycleHooksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifeCycleHooksRoutingModule { }
