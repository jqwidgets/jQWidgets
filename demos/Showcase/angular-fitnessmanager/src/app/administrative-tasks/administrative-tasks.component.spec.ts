import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeTasksComponent } from './administrative-tasks.component';

describe('AdministrativeTasksComponent', () => {
  let component: AdministrativeTasksComponent;
  let fixture: ComponentFixture<AdministrativeTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
