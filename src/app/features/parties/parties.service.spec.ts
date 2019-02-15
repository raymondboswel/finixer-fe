import { TestBed } from '@angular/core/testing';

import { PartiesService } from './parties.service';

describe('PartiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartiesService = TestBed.get(PartiesService);
    expect(service).toBeTruthy();
  });
});
