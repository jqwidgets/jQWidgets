import { TestBed, inject } from '@angular/core/testing';

import { AddComponentService } from './add-component.service';

describe('AddComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddComponentService]
    });
  });

  it('should be created', inject([AddComponentService], (service: AddComponentService) => {
    expect(service).toBeTruthy();
  }));
});
