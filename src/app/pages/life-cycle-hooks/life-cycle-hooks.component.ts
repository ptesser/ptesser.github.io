import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { DummyService } from '../../services/dummy.service';

/*
ngOnChanges()
Respond when Angular (re)sets data-bound input properties.
The method receives a SimpleChanges object of current and previous property values.

Called before ngOnInit() and whenever one or more data-bound input properties change.

ngOnInit()
Initialize the directive/component after Angular first displays the data-bound properties
and sets the directive/component's input properties.

Called once, after the first ngOnChanges().

ngDoCheck()
Detect and act upon changes that Angular can't or won't detect on its own.

Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

ngAfterContentInit()
Respond after Angular projects external content into the component's view / the view that a directive is in.
Called once after the first ngDoCheck().

ngAfterContentChecked()
Respond after Angular checks the content projected into the directive/component.

Called after the ngAfterContentInit() and every subsequent ngDoCheck().

ngAfterViewInit()
Respond after Angular initializes the component's views and child views / the view that a directive is in.

Called once after the first ngAfterContentChecked().

ngAfterViewChecked()
Respond after Angular checks the component's views and child views / the view that a directive is in.
Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().

ngOnDestroy()
Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
Called just before Angular destroys the directive/component.

*/

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss'],
  providers: [DummyService],
})
// Interface aren't necessary.
// You don't have to add the lifecycle hook interfaces to directives and components to benefit from the hooks themselves
export class LifeCycleHooksComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  readonly hooksCalled: string[] = [];

  constructor(private readonly dummy: DummyService) {
    // we'll see output 0 because in this component DummyService is a new instance if set as providers of the current component
    this.dummy.logCounter();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.hooksCalled.push('ngOnChanges');
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    this.hooksCalled.push('ngOnInit');
    console.log('ngOnInit trigger');
  }

  ngDoCheck() {
    this.hooksCalled.push('ngDoCheck');
    console.log('ngDoCheck trigger');
  }

  ngAfterContentInit() {
    this.hooksCalled.push('ngAfterContentInit');
    console.log('ngAfterContentInit trigger');
  }

  ngAfterContentChecked() {
    this.hooksCalled.push('ngAfterContentInit');
    console.log('ngAfterContentChecked trigger');
  }

  ngAfterViewInit() {
    this.hooksCalled.push('ngAfterViewInit');
    console.log('ngAfterViewInit trigger');
  }

  ngAfterViewChecked() {
    this.hooksCalled.push('ngAfterViewChecked');
    console.log('ngAfterViewChecked trigger');
  }

  ngOnDestroy() {
    this.hooksCalled.push('ngOnDestroy');
    console.log('ngOnDestroy trigger');
  }

}
