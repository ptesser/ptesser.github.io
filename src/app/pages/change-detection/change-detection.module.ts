import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { AlwaysTriggerComponent } from './always-trigger/always-trigger.component';
import { SimpleOnPushComponent } from './simple-on-push/simple-on-push.component';
import { RunChangeDetectionComponent } from './run-change-detection/run-change-detection.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [
    AlwaysTriggerComponent,
    AsyncPipeComponent,
    ChangeDetectionComponent,
    RunChangeDetectionComponent,
    SimpleOnPushComponent,
  ]
})
export class ChangeDetectionModule { }
