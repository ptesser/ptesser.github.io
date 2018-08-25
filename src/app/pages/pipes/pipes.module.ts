import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesRoutingModule } from './pipes.routing';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule,
    PipesRoutingModule,
  ],
  declarations: [PipesComponent],
})
export class PipesModule { }
