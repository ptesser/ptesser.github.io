import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateAndContainerComponent } from './ng-template-and-container.component';

describe('NgTemplateAndContainerComponent', () => {
  let component: NgTemplateAndContainerComponent;
  let fixture: ComponentFixture<NgTemplateAndContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateAndContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateAndContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
