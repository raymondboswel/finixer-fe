import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tag } from "src/app/models/tag.interface";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class TagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<Tag[]> {
    return this.http
      .get(`http://localhost:4000/api/tags/`)
      .pipe(map((res: any) => res.data));
  }

  addPartyTag(party_id, tag_id) {
    return this.http.post(`http://localhost:4000/api/parties_tags`, {
      party_tag: { tag_id: tag_id, party_id: party_id }
    });
  }

  removeTag(party_id, tag_id) {
    return this.http.delete(
      `http://localhost:4000/api/parties/${party_id}/tag/${tag_id}`
    );
  }

  addTag(tagName: string): Observable<Tag> {
    return this.http
      .post(`http://localhost:4000/api/tags`, { tag: { tag: tagName } })
      .pipe(map((res: any) => res.data));
  }

  deleteTag(tag_id) {
    return this.http.delete(`http://localhost:4000/api/tags/${tag_id}`);
  }
}
