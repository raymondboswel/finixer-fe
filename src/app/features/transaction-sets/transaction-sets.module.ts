import { MaterialModule } from "./../../material-module.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionSetsContainerComponent } from "./transaction-sets-container/transaction-sets-container.component";
import { TransactionSetsTableComponent } from "./component/transaction-sets-table/transaction-sets-table.component";
import { AddTransactionSetComponent } from './component/add-transaction-set/add-transaction-set.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    TransactionSetsContainerComponent,
    TransactionSetsTableComponent,
    AddTransactionSetComponent
  ]
})
export class TransactionSetsModule {}
