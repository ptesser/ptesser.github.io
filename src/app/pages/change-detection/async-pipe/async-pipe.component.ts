import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  template: `
    <h2>Async Pipe</h2>
    <h3>Private items set from Observable internal subscribe</h3>
    <p>This does not trigger change detection because the reference to the observable input is always the same.</p>
    <div *ngFor="let item of _items">{{ item.title }}</div>
    <h3>Items managed with async pipe</h3>
    <p>In this case Angular async pipe provides to mark for next change detection by himself.</p>
    <div *ngFor="let item of asyncItems | async">{{ item.title }}</div>
    <h3>Note</h3>
    <p>In the application both code are working,
      so we'll see also the first one that updates the list because CD will be trigger by the second one.</p>
  `,
  styleUrls: ['./async-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncPipeComponent implements OnInit {

  @Input() items: Observable<any[]>;
  _items: any[];

  @Input() asyncItems: Observable<any[]>;

  constructor(
  ) {
  }

  ngOnInit() {
    this.items.subscribe((items) => {
      this._items = items;
    });
  }
}
