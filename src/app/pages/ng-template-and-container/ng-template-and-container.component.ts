import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-and-container',
  templateUrl: './ng-template-and-container.component.html',
  styleUrls: ['./ng-template-and-container.component.scss']
})
export class NgTemplateAndContainerComponent implements OnInit {

  items: string[];

  templateContext = {
    value: 1,
  };

  constructor() {
    setTimeout(() => {
      this.items = ['1', '2', '3', '4'];
    }, 5000);
  }

  ngOnInit() {
  }

}
