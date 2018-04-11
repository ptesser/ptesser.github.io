import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
    children: [
      { path: '', component: PipesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule {
}
