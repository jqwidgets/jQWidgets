import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitGridComponent } from './profit-grid.component';

describe('ProfitGridComponent', () => {
  let component: ProfitGridComponent;
  let fixture: ComponentFixture<ProfitGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
