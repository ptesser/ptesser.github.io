import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuxiliaryRoutesComponent } from './auxiliary-routes.component';
import { AuxiliarySidebarComponent } from '../../shared/auxiliary-sidebar/auxiliary-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: AuxiliaryRoutesComponent,
    children: [
      {
        path: '',
        outlet: 'sidebar',
        component: AuxiliarySidebarComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxiliaryRoutesRoutingModule { }
