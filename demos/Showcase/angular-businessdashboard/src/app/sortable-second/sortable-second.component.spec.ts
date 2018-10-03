import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableSecondComponent } from './sortable-second.component';

describe('SortableSecondComponent', () => {
  let component: SortableSecondComponent;
  let fixture: ComponentFixture<SortableSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
