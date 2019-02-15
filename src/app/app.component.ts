import { Component, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "finixir-fe";
  @ViewChild("drawer")
  sidenav: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  showDashboard() {
    this.navigate("/");
  }

  showTransactionSets() {
    this.navigate("transaction-sets");
  }

  showTags() {
    this.navigate("tags");
  }

  showParties() {
    this.navigate("parties");
  }

  navigate(url: string) {
    this.router.navigate([url]);
    this.sidenav.close();
  }
}
