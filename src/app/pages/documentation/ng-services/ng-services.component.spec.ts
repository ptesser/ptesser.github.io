import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServicesComponent } from './ng-services.component';

describe('NgServicesComponent', () => {
  let component: NgServicesComponent;
  let fixture: ComponentFixture<NgServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
