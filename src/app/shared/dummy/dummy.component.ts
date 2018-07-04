import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../services/dummy.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(
    private readonly dummy: DummyService,
  ) {
    this.dummy.logCounter();
  }

  ngOnInit() {
  }

}
