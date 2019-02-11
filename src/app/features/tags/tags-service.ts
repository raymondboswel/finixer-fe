import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TagsService {
  constructor(private http: HttpClient) {}

  removeTag(party_id, tag_id) {
    return this.http.delete(
      `http://localhost:4000/api/parties/${party_id}/tag/${tag_id}`
    );
  }
}
