import { TestBed, inject } from '@angular/core/testing';

import { FitnessService } from './fitness.service';

describe('FitnessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FitnessService]
    });
  });

  it('should be created', inject([FitnessService], (service: FitnessService) => {
    expect(service).toBeTruthy();
  }));
});
