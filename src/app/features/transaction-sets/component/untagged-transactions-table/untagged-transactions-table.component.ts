import {
  AddTagDialogComponent,
  TagType
} from "../add-tag-dialog/add-tag-dialog.component";
import { TagsService } from "../../../tags/tags-service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { TransactionSetsService } from "../../transaction-sets.service";
import { Party } from "src/app/models/party.interface";
import { Tag } from "src/app/models/tag.interface";
import { Transaction } from "src/app/models/transaction.interface";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-untagged-transactions-table",
  templateUrl: "./untagged-transactions-table.component.html",
  styleUrls: ["./untagged-transactions-table.component.scss"]
})
export class UntaggedTransactionsTableComponent implements OnInit {
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
    private tagsService: TagsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramsMap => {
      // console.log()
      const transactionSetId = paramsMap.get("id");
      this.transactionsSetService
        .getUntaggedTransactions(transactionSetId)
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

  addTag(transaction: Transaction) {
    const dialogRef = this.dialog.open(AddTagDialogComponent, {
      width: "80%"
    });
    dialogRef.componentInstance.tagType = TagType.Transaction;
    dialogRef.componentInstance.transaction = transaction;
  }
}
