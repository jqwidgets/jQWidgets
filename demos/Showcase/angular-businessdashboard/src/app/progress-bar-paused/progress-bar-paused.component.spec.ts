import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarPausedComponent } from './progress-bar-paused.component';

describe('ProgressBarPausedComponent', () => {
  let component: ProgressBarPausedComponent;
  let fixture: ComponentFixture<ProgressBarPausedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarPausedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarPausedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
