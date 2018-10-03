import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsSchedulesComponent } from './rooms-schedules.component';

describe('RoomsSchedulesComponent', () => {
  let component: RoomsSchedulesComponent;
  let fixture: ComponentFixture<RoomsSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
