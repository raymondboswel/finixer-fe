import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSetsTableComponent } from './transaction-sets-table.component';

describe('TransactionSetsTableComponent', () => {
  let component: TransactionSetsTableComponent;
  let fixture: ComponentFixture<TransactionSetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
