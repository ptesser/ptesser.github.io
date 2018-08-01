import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-always-trigger',
  template: `
    <h2>Always run</h2>
    {{ runChangeDetection }}
  `,
  styleUrls: ['./always-trigger.component.scss']
})
export class AlwaysTriggerComponent implements OnInit {

  get runChangeDetection() {
    console.log('Checking the view in always trigger component');
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
