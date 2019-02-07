import { TransactionSet } from "./../../../../models/transaction-set.interface";
import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-transaction-sets-table",
  templateUrl: "./transaction-sets-table.component.html",
  styleUrls: ["./transaction-sets-table.component.css"]
})
export class TransactionSetsTableComponent implements OnInit, OnChanges {
  @Input() transactionSets: TransactionSet[];
  displayedColumns: string[] = ["startDate", "endDate", "title", "actions"];
  datasource = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.datasource = this.transactionSets;
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const change = changes[propName];

      if (propName === "transactionSets") {
        console.log("on changes");
        this.datasource = change.currentValue;
      }
    }
  }

  viewTransactions(transactionSet: TransactionSet) {
    this.router.navigate(["view", transactionSet.id]);
  }
}
