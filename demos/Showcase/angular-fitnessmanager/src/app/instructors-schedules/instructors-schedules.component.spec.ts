import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsSchedulesComponent } from './instructors-schedules.component';

describe('InstructorsSchedulesComponent', () => {
  let component: InstructorsSchedulesComponent;
  let fixture: ComponentFixture<InstructorsSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
