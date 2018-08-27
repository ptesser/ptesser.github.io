import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptEs6Component } from './typescript-es6.component';

describe('TypescriptEs6Component', () => {
  let component: TypescriptEs6Component;
  let fixture: ComponentFixture<TypescriptEs6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptEs6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptEs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
