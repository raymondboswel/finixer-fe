import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TransactionSetsContainerComponent } from "./features/transaction-sets/transaction-sets-container/transaction-sets-container.component";
import { TransactionSetsModule } from "./features/transaction-sets/transaction-sets.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TransactionSetsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: TransactionSetsContainerComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
