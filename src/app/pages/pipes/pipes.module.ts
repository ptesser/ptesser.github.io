import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesRoutingModule } from './pipes.routing';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
  ],
  declarations: [PipesComponent],
})
export class PipesModule { }
