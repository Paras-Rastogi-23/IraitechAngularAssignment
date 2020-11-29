import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3Component } from './Question3.component';

describe('RegisterComponent', () => {
  let component: Question3Component;
  let fixture: ComponentFixture<Question3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
