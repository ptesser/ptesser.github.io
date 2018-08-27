import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CliBuildComponent } from './cli-build/cli-build.component';
import { NgDirectivesComponent } from './ng-directives/ng-directives.component';
import { NgServicesComponent } from './ng-services/ng-services.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { ReduxComponent } from './redux/redux.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TypescriptEs6Component } from './typescript-es6/typescript-es6.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule,
    DocumentationRoutingModule,
  ],
  declarations: [
    CliBuildComponent,
    DocumentationComponent,
    NgDirectivesComponent,
    NgModulesComponent,
    NgServicesComponent,
    ReduxComponent,
    RxjsComponent,
    TypescriptEs6Component,
  ],
})
export class DocumentationModule {
}
