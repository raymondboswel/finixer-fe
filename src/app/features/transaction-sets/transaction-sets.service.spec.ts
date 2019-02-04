import { TestBed } from '@angular/core/testing';

import { TransactionSetsService } from './transaction-sets.service';

describe('TransactionSetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionSetsService = TestBed.get(TransactionSetsService);
    expect(service).toBeTruthy();
  });
});
