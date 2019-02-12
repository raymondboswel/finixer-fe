import { Party } from "./../../../../models/party.interface";
import { Component, OnInit } from "@angular/core";
import { TagsService } from "src/app/features/tags/tags-service";
import { Tag } from "src/app/models/tag.interface";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-tag-dialog",
  templateUrl: "./add-tag-dialog.component.html",
  styleUrls: ["./add-tag-dialog.component.scss"]
})
export class AddTagDialogComponent implements OnInit {
  tags: Tag[];
  selectedTag: Tag;
  party: Party;
  constructor(
    private tagsService: TagsService,
    public dialogRef: MatDialogRef<AddTagDialogComponent>
  ) {}

  ngOnInit() {
    this.tagsService.getTags().subscribe(tags => {
      this.tags = tags;
      console.log(this.tags);
    });
  }
  cancel() {
    this.dialogRef.close();
  }

  addPartyTag() {
    this.tagsService
      .addPartyTag(this.party.id, this.selectedTag.id)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
