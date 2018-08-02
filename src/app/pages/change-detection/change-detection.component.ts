import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {

  object = {
    property: 'Property'
  };

  items = [];
  items$ = new BehaviorSubject(this.items);

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.object.property = 'New Property';
  }

  onClickFun() {
    this.object = { property: 'New Property '};
  }

  addItems() {
    this.items.push({ title: Math.random() });
    this.items$.next(this.items);
  }
}
