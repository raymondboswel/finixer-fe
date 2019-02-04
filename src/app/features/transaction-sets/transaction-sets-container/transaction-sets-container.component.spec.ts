import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSetsContainerComponent } from './transaction-sets-container.component';

describe('TransactionSetsContainerComponent', () => {
  let component: TransactionSetsContainerComponent;
  let fixture: ComponentFixture<TransactionSetsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSetsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
