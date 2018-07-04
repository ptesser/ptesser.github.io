import { Injectable } from '@angular/core';

@Injectable()
export class DummyService {

  serviceCounter = 0;

  constructor() {
  }

  increaseCounter() {
    this.serviceCounter++;
  }

  decreaseCounter() {
    this.serviceCounter--;
  }

  setCounter(val: number) {
    if (val) {
      this.serviceCounter = val;
    }
  }

  logCounter() {
    console.log(`Dummy counter: ${this.serviceCounter}`);
  }
}
