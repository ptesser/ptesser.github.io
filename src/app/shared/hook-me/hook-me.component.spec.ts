import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookMeComponent } from './hook-me.component';

describe('HookMeComponent', () => {
  let component: HookMeComponent;
  let fixture: ComponentFixture<HookMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
