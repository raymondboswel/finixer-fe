import { TransactionSetsModule } from './transaction-sets.module';

describe('TransactionSetsModule', () => {
  let transactionSetsModule: TransactionSetsModule;

  beforeEach(() => {
    transactionSetsModule = new TransactionSetsModule();
  });

  it('should create an instance', () => {
    expect(transactionSetsModule).toBeTruthy();
  });
});
