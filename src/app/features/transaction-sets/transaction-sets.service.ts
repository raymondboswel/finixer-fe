import { TransactionSet } from "./../../models/transaction-set.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface RemoteTransactionSet {
  id: string;
  start_date: string;
  end_date: string;
  title: string;
}

interface GetTransactionSetResponse {
  data: RemoteTransactionSet[];
}

@Injectable({
  providedIn: "root"
})
export class TransactionSetsService {
  constructor(private http: HttpClient) {}

  uploadTransactionSet(file, title, startDate: Date, endDate: Date) {
    const formData = new FormData();
    console.log(file);
    formData.append("file", file);
    formData.append("title", title);
    formData.append("start_date", startDate.toISOString());
    formData.append("end_date", startDate.toISOString());

    return this.http.post(
      `http://localhost:4000/api/transaction_sets`,
      formData
    );
  }

  getTransactionSets(): Observable<TransactionSet[]> {
    return this.http
      .get<GetTransactionSetResponse>(
        "http://localhost:4000/api/transaction_sets"
      )
      .pipe(
        map(r => {
          const rts: RemoteTransactionSet[] = r.data;
          return rts.map(this.convertToLocalTransactionSet);
        })
      );
  }

  convertToLocalTransactionSet(rts: RemoteTransactionSet) {
    const ts: TransactionSet = {
      id: rts.id,
      startDate: rts.start_date,
      endDate: rts.end_date,
      title: rts.title
    };
    return ts;
  }
}
