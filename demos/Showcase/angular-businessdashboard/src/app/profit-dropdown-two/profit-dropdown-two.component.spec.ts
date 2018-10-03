import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitDropdownTwoComponent } from './profit-dropdown-two.component';

describe('ProfitDropdownTwoComponent', () => {
  let component: ProfitDropdownTwoComponent;
  let fixture: ComponentFixture<ProfitDropdownTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitDropdownTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitDropdownTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
