import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBarGaugeComponent } from './right-bar-gauge.component';

describe('RightBarGaugeComponent', () => {
  let component: RightBarGaugeComponent;
  let fixture: ComponentFixture<RightBarGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightBarGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBarGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
