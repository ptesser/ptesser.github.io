import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule as NgxInfiniteScrollModule } from 'ngx-infinite-scroll';

import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';
import { InfiniteScrollComponent } from './infinite-scroll.component';

@NgModule({
  imports: [
    CommonModule,
    NgxInfiniteScrollModule,
    InfiniteScrollRoutingModule
  ],
  declarations: [InfiniteScrollComponent]
})
export class InfiniteScrollModule { }
