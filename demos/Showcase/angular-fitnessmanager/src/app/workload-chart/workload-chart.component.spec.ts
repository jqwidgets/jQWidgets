import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadChartComponent } from './workload-chart.component';

describe('WorkloadChartComponent', () => {
  let component: WorkloadChartComponent;
  let fixture: ComponentFixture<WorkloadChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
