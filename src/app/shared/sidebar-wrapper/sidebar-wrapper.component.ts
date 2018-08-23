import { Component, OnInit, Input } from '@angular/core';

export interface Menu {
  active: string;
  items: MenuItem[];
}

export interface MenuItem {
  title: string;
  route?: string;
  templateContent?: string;
}

@Component({
  selector: 'app-sidebar-wrapper',
  templateUrl: './sidebar-wrapper.component.html',
  styleUrls: ['./sidebar-wrapper.component.scss']
})
export class SidebarWrapperComponent implements OnInit {

  // the same result could be achieve using children routes instead of multiple templates
  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
    if (!this.menu) {
      this.menu = {
        active: 'doc',
        items: [
          { title: 'Documentation', templateContent: 'doc' },
          { title: 'Examples', templateContent: 'example' },
        ],
      };
    }
  }

}
