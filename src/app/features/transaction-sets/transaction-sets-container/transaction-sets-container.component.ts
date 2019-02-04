import { TransactionSet } from "./../../../models/transaction-set.interface";
import { TransactionSetsService } from "./../transaction-sets.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transaction-sets-container",
  templateUrl: "./transaction-sets-container.component.html",
  styleUrls: ["./transaction-sets-container.component.css"]
})
export class TransactionSetsContainerComponent implements OnInit {
  transactionSets: TransactionSet[];

  constructor(private transactionSetsService: TransactionSetsService) {}

  ngOnInit() {
    this.transactionSetsService
      .getTransactionSets()
      .subscribe(transactionSets => {
        this.transactionSets = transactionSets;
      });
  }
}
