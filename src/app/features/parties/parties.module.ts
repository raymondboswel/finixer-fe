import { MaterialModule } from "./../../material-module.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartyListContainerComponent } from "./party-list-container/party-list-container.component";

@NgModule({
  declarations: [PartyListContainerComponent],
  imports: [CommonModule, MaterialModule]
})
export class PartiesModule {}
