import { Component } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { CliBuildComponent } from './cli-build/cli-build.component';
import { NgDirectivesComponent } from './ng-directives/ng-directives.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { NgServicesComponent } from './ng-services/ng-services.component';
import { TypescriptEs6Component } from './typescript-es6/typescript-es6.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ReduxComponent } from './redux/redux.component';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent {

  readonly menu = routes[0].children as DocsRoute[];

  constructor(
  ) {
  }

}

// NOTE: This is done to avoid circular dependency between this file and `document-routing.module.ts`
export interface DocsRoute extends Route {
  title: string;
}

export const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        title: 'Angular CLI - Build',
        path: 'angular/cli-build',
        component: CliBuildComponent,
      },
      {
        title: 'Angular Directives',
        path: 'angular/directives',
        component: NgDirectivesComponent,
      },
      {
        title: 'Angular Modules',
        path: 'angular/modules',
        component: NgModulesComponent,
      },
      {
        title: 'Angular Services',
        path: 'angular/services',
        component: NgServicesComponent,
      },
      {
        title: 'Typescript - ES6',
        path: 'typescript-es6',
        component: TypescriptEs6Component,
      },
      {
        title: 'RxJS',
        path: 'rxjs',
        component: RxjsComponent,
      },
      {
        title: 'Redux',
        path: 'redux',
        component: ReduxComponent,
      },
    ] as DocsRoute[],
  }
];
