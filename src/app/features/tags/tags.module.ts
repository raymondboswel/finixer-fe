import { MaterialModule } from "./../../material-module.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TagsListContainerComponent } from "./tags-list-container/tags-list-container.component";

@NgModule({
  declarations: [TagsListContainerComponent],
  imports: [CommonModule, MaterialModule]
})
export class TagsModule {}
