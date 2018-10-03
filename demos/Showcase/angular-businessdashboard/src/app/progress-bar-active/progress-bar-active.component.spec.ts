import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarActiveComponent } from './progress-bar-active.component';

describe('ProgressBarActiveComponent', () => {
  let component: ProgressBarActiveComponent;
  let fixture: ComponentFixture<ProgressBarActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
