import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsExpandersComponent } from './news-expanders.component';

describe('NewsExpandersComponent', () => {
  let component: NewsExpandersComponent;
  let fixture: ComponentFixture<NewsExpandersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsExpandersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsExpandersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
