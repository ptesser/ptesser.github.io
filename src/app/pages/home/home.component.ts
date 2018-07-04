import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../services/dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private readonly dummy: DummyService,
  ) {
    this.dummy.increaseCounter();
  }

}
