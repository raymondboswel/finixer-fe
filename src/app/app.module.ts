import { TransactionsTableComponent } from "./features/transaction-sets/component/transactions-table/transactions-table.component";
import { AddTransactionSetComponent } from "./features/transaction-sets/component/add-transaction-set/add-transaction-set.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TransactionSetsContainerComponent } from "./features/transaction-sets/transaction-sets-container/transaction-sets-container.component";
import { TransactionSetsModule } from "./features/transaction-sets/transaction-sets.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module.module";
import { MatNativeDateModule } from "@angular/material";
import { TagsListContainerComponent } from "./features/tags/tags-list-container/tags-list-container.component";
import { TagsModule } from "./features/tags/tags.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TransactionSetsModule,
    TagsModule,
    MaterialModule,
    MatNativeDateModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "transaction-sets",
        children: [
          {
            path: "",
            component: TransactionSetsContainerComponent
          },
          {
            path: "new",
            component: AddTransactionSetComponent
          },
          {
            path: "view/:id",
            component: TransactionsTableComponent
          }
        ]
      },
      {
        path: "tags",
        children: [{ path: "", component: TagsListContainerComponent }]
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
