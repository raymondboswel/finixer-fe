import { MaterialModule } from "./../../material-module.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionSetsContainerComponent } from "./transaction-sets-container/transaction-sets-container.component";
import { TransactionSetsTableComponent } from "./component/transaction-sets-table/transaction-sets-table.component";
import { AddTransactionSetComponent } from "./component/add-transaction-set/add-transaction-set.component";
import { TransactionsTableComponent } from "./component/transactions-table/transactions-table.component";
import { AddTagDialogComponent } from "./component/add-tag-dialog/add-tag-dialog.component";
import { UntaggedTransactionsTableComponent } from "./component/untagged-transactions-table/untagged-transactions-table.component";

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    UntaggedTransactionsTableComponent,
    TransactionSetsContainerComponent,
    TransactionSetsTableComponent,
    AddTransactionSetComponent,
    TransactionsTableComponent,
    AddTagDialogComponent
  ],
  entryComponents: [AddTagDialogComponent]
})
export class TransactionSetsModule {}
