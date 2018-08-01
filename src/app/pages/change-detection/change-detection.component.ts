import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {

  object = {
    property: 'Property'
  };

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.object.property = 'New Property';
  }

  onClickFun() {
    this.object = { property: 'New Property '};
  }
}
