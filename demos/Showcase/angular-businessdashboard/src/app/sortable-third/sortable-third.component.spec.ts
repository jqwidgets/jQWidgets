import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableThirdComponent } from './sortable-third.component';

describe('SortableThirdComponent', () => {
  let component: SortableThirdComponent;
  let fixture: ComponentFixture<SortableThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
