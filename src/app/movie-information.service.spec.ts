import { TestBed } from '@angular/core/testing';

import { MovieInformationService } from './movie-information.service';

describe('MovieInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieInformationService = TestBed.get(MovieInformationService);
    expect(service).toBeTruthy();
  });
});
