import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2Component } from './Question2.component';

describe('LoginComponent', () => {
  let component: Question2Component;
  let fixture: ComponentFixture<Question2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
