import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  scrollDistance = 2;

  constructor() {}

  ngOnInit() {}

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    this.addItems();
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
  }

  private addItems() {
    this.items = this.items.concat([0, 1, 2, 3, 4, 5, 6]);
  }
}
