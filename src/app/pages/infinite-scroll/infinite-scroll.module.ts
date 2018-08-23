import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule as NgxInfiniteScrollModule } from 'ngx-infinite-scroll';

import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxInfiniteScrollModule,
    InfiniteScrollRoutingModule
  ],
  declarations: [InfiniteScrollComponent]
})
export class InfiniteScrollModule { }
