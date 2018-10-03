import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessInstructorsComponent } from './fitness-instructors.component';

describe('FitnessInstructorsComponent', () => {
  let component: FitnessInstructorsComponent;
  let fixture: ComponentFixture<FitnessInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
