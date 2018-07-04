import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';
import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LifeCycleHooksRoutingModule,
    SharedModule,
  ],
  declarations: [LifeCycleHooksComponent]
})
export class LifeCycleHooksModule { }
