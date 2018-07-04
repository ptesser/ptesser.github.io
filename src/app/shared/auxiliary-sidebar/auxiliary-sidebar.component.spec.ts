import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarySidebarComponent } from './auxiliary-sidebar.component';

describe('AuxiliarySidebarComponent', () => {
  let component: AuxiliarySidebarComponent;
  let fixture: ComponentFixture<AuxiliarySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliarySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
