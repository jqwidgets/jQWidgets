import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarGaugeComponent } from './left-bar-gauge.component';

describe('LeftBarGaugeComponent', () => {
  let component: LeftBarGaugeComponent;
  let fixture: ComponentFixture<LeftBarGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBarGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
