import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarEndedComponent } from './progress-bar-ended.component';

describe('ProgressBarEndedComponent', () => {
  let component: ProgressBarEndedComponent;
  let fixture: ComponentFixture<ProgressBarEndedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarEndedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarEndedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
