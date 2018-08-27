import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliBuildComponent } from './cli-build.component';

describe('CliBuildComponent', () => {
  let component: CliBuildComponent;
  let fixture: ComponentFixture<CliBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
