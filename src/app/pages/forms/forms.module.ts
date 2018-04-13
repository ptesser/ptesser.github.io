import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms'; // alias because we are declaring our FormsModule (bad practice)
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgFormsModule,
  ],
  declarations: [FormsComponent]
})
export class FormsModule {
}
