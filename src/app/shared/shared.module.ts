import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { HookMeComponent } from './hook-me/hook-me.component';
import { MovieService } from '../services/movie.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuxiliarySidebarComponent } from './auxiliary-sidebar/auxiliary-sidebar.component';
import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { RouterModule } from '@angular/router';

const components = [
  AuxiliarySidebarComponent,
  DummyComponent,
  HookMeComponent,
  SidebarWrapperComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  exports: [
    ...components,
    HttpClientModule,
  ],
  declarations: [...components],
})
export class SharedModule {
  // https://github.com/jvandemo/generator-angular2-library/issues/277 fix by @jvandemo
  // solved: NullInjectorError: No provider for HttpClient error
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ MovieService ],
    };
  }
}
