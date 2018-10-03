import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDropdownComponent } from './news-dropdown.component';

describe('NewsDropdownComponent', () => {
  let component: NewsDropdownComponent;
  let fixture: ComponentFixture<NewsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
