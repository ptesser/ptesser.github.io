import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-hook-me',
  templateUrl: './hook-me.component.html',
  styleUrls: ['./hook-me.component.scss']
})
export class HookMeComponent implements OnChanges, OnInit {

  @Input() value: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('chnages', changes);
  }

  ngOnInit() {
  }

}
