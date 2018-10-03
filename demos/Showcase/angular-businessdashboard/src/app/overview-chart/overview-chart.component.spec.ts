import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChartComponent } from './overview-chart.component';

describe('OverviewChartComponent', () => {
  let component: OverviewChartComponent;
  let fixture: ComponentFixture<OverviewChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
