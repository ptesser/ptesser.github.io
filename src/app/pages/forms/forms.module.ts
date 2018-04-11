import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
  ],
  declarations: [FormsComponent]
})
export class FormsModule {
}
