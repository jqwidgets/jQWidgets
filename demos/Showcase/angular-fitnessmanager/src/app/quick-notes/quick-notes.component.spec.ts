import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNotesComponent } from './quick-notes.component';

describe('QuickNotesComponent', () => {
  let component: QuickNotesComponent;
  let fixture: ComponentFixture<QuickNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
