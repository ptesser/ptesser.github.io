import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { HookMeComponent } from './hook-me/hook-me.component';
import { MovieService } from '../services/movie.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const components = [
  DummyComponent,
  HookMeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  exports: [
    ...components,
    HttpClientModule,
  ],
  declarations: [...components, HookMeComponent],
})
export class SharedModule {
  // https://github.com/jvandemo/generator-angular2-library/issues/277 fix by @jvandemo
  // solved: NullInjectorError: No provider for HttpClient error
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MovieService],
    };
  }
}
