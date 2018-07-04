import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenericsComponent } from './generics.component';

const routes: Routes = [
  {
    path: '',
    component: GenericsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class GenericsRoutingModule { }
