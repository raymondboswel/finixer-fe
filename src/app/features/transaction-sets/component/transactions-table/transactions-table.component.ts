import { TagsService } from "./../../../tags/tags-service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { TransactionSetsService } from "../../transaction-sets.service";
import { Party } from "src/app/models/party.interface";
import { Tag } from "src/app/models/tag.interface";
import { Transaction } from "src/app/models/transaction.interface";

@Component({
  selector: "app-transactions-table",
  templateUrl: "./transactions-table.component.html",
  styleUrls: ["./transactions-table.component.scss"]
})
export class TransactionsTableComponent implements OnInit {
  displayedColumns: string[] = [
    "transactionDate",
    "party",
    "tags",
    "amount",
    "actions"
  ];
  datasource: Transaction[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionsSetService: TransactionSetsService,
    private tagsService: TagsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramsMap => {
      // console.log()
      const transactionSetId = paramsMap.get("id");
      this.transactionsSetService
        .getTransactions(transactionSetId)
        .subscribe(r => {
          this.datasource = r;
        });
    });
  }

  removeTag(party: Party, tag: Tag) {
    this.tagsService.removeTag(party.id, tag.id).subscribe(() => {
      this.datasource = this.datasource.map(txn => {
        return {
          ...txn,
          party: {
            ...txn.party,
            tags: this.filterPartyTag(txn.party, party.id, tag.id)
          }
        };
      });
    });
  }

  filterPartyTag(party: Party, party_id, tag_id) {
    return party.id !== party_id
      ? party.tags
      : party.tags.filter(t => t.id === tag_id);
  }

  addTag() {}
}
