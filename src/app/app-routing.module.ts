import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// https://github.com/angular/angular-cli/issues/9488 fix by @kcir3v4M
const pages = './pages/pages.module#PagesModule';

const routes: Routes = [
  {
    path: '',
    loadChildren: pages,
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
