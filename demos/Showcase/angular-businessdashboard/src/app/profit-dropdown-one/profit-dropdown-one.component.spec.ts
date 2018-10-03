import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitDropdownOneComponent } from './profit-dropdown-one.component';

describe('ProfitDropdownOneComponent', () => {
  let component: ProfitDropdownOneComponent;
  let fixture: ComponentFixture<ProfitDropdownOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitDropdownOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitDropdownOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
