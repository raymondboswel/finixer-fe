import { Component, OnInit } from "@angular/core";
import { Party } from "src/app/models/party.interface";
import { Tag } from "src/app/models/tag.interface";
import { TagsService } from "../../tags/tags-service";
import { PartiesService } from "../parties.service";
import { MatDialog } from "@angular/material";
import {
  AddTagDialogComponent,
  TagType
} from "../../transaction-sets/component/add-tag-dialog/add-tag-dialog.component";

@Component({
  selector: "app-party-list-container",
  templateUrl: "./party-list-container.component.html",
  styleUrls: ["./party-list-container.component.scss"]
})
export class PartyListContainerComponent implements OnInit {
  parties: Party[];
  constructor(
    private partiesService: PartiesService,
    private tagsService: TagsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.partiesService.getParties().subscribe(parties => {
      this.parties = parties;
    });
  }

  removeTag(party: Party, tag: Tag) {
    this.tagsService.removeTag(party.id, tag.id).subscribe();
  }

  addTag(party: Party) {
    const dialogRef = this.dialog.open(AddTagDialogComponent, {
      width: "80%"
    });
    dialogRef.componentInstance.tagType = TagType.Party;
    dialogRef.componentInstance.party = party;
  }
}
