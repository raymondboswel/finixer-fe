import { TagsService } from "./../tags-service";
import { Component, OnInit } from "@angular/core";
import { Tag } from "src/app/models/tag.interface";

@Component({
  selector: "app-tags-list-container",
  templateUrl: "./tags-list-container.component.html",
  styleUrls: ["./tags-list-container.component.scss"]
})
export class TagsListContainerComponent implements OnInit {
  tags: Tag[];
  newTag: string;

  constructor(private tagsService: TagsService) {}

  ngOnInit() {
    this.tagsService.getTags().subscribe(tags => {
      this.tags = tags;
      console.log(this.tags);
    });
  }

  addTag() {
    this.tagsService.addTag(this.newTag).subscribe(tag => {
      this.tags.push(tag);
    });
  }

  deleteTag(tag: Tag) {
    this.tagsService
      .deleteTag(tag.id)
      .subscribe(() => (this.tags = this.tags.filter(t => t.id !== tag.id)));
  }
}
