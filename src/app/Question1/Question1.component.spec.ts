import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1Component } from './Question1.component';

describe('DashboardComponent', () => {
  let component: Question1Component;
  let fixture: ComponentFixture<Question1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
