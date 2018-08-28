import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';
import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    SharedModule,
    LifeCycleHooksRoutingModule,
  ],
  declarations: [LifeCycleHooksComponent]
})
export class LifeCycleHooksModule { }
