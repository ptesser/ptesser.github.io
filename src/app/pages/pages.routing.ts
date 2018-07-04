import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// https://github.com/angular/angular-cli/issues/9488 fix by @kcir3v4M
const home = './home/home.module#HomeModule';
const pipes = './pipes/pipes.module#PipesModule';
const forms = './forms/forms.module#FormsModule';
const lifeCycle = './life-cycle-hooks/life-cycle-hooks.module#LifeCycleHooksModule';
const movies = './movie/movie.module#MovieModule';
const generics = './generics/generics.module#GenericsModule';
const auxiliaryRoutes = './auxiliary-routes/auxiliary-routes.module#AuxiliaryRoutesModule';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: home,
  },
  {
    path: 'life-cycle',
    loadChildren: lifeCycle,
  },
  {
    path: 'pipes',
    loadChildren: pipes,
  },
  {
    path: 'forms',
    loadChildren: forms,
  },
  {
    path: 'movies',
    loadChildren: movies,
  },
  {
    path: 'generics',
    loadChildren: generics,
  },
  {
    path: 'auxiliary-routes',
    loadChildren: auxiliaryRoutes,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
