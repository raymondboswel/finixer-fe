import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionSetComponent } from './add-transaction-set.component';

describe('AddTransactionSetComponent', () => {
  let component: AddTransactionSetComponent;
  let fixture: ComponentFixture<AddTransactionSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransactionSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
