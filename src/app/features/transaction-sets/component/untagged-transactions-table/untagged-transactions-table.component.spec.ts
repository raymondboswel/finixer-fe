import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UntaggedTransactionsTableComponent } from "./untagged-transactions-table.component";

describe("UntaggedTransactionsTableComponent", () => {
  let component: UntaggedTransactionsTableComponent;
  let fixture: ComponentFixture<UntaggedTransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UntaggedTransactionsTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntaggedTransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
