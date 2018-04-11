import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// https://github.com/angular/angular-cli/issues/9488 fix by @kcir3v4M
const pipes = './pipes/pipes.module#PipesModule';
const forms = './forms/forms.module#FormsModule';

const routes: Routes = [
  {
    path: 'pipes',
    loadChildren: pipes,
  },
  {
    path: 'forms',
    loadChildren: forms,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
