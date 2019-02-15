import { Party } from "src/app/models/party.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PartiesService {
  constructor(private http: HttpClient) {}

  getParties(): Observable<Party[]> {
    return this.http
      .get(`http://localhost:4000/api/parties`)
      .pipe(map((res: any) => res.data));
  }
}
