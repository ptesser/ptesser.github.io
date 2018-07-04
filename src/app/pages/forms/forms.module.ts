import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms'; // alias because we are declaring our FormsModule (bad practice)
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgFormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FormsComponent]
})
export class FormsModule {
}
