import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceChartComponent } from './performance-chart.component';

describe('PerformanceChartComponent', () => {
  let component: PerformanceChartComponent;
  let fixture: ComponentFixture<PerformanceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
