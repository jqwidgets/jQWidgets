import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableFirstComponent } from './sortable-first.component';

describe('SortableFirstComponent', () => {
  let component: SortableFirstComponent;
  let fixture: ComponentFixture<SortableFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
