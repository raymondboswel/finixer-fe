import { TransactionSet } from "./../../../models/transaction-set.interface";
import { TransactionSetsService } from "./../transaction-sets.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-transaction-sets-container",
  templateUrl: "./transaction-sets-container.component.html",
  styleUrls: ["./transaction-sets-container.component.css"]
})
export class TransactionSetsContainerComponent implements OnInit {
  transactionSets: TransactionSet[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private transactionSetsService: TransactionSetsService
  ) {}

  ngOnInit() {
    this.transactionSetsService
      .getTransactionSets()
      .subscribe(transactionSets => {
        this.transactionSets = transactionSets;
      });
  }

  gotoAddTransactionSet() {
    this.router.navigate(["new"], { relativeTo: this.activatedRoute });
  }
}
