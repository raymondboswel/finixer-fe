import { TransactionSet } from "./../../models/transaction-set.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface RemoteTransactionSet {
  id: string;
  start_date: string;
  end_date: string;
}

interface GetTransactionSetResponse {
  data: RemoteTransactionSet[];
}

@Injectable({
  providedIn: "root"
})
export class TransactionSetsService {
  constructor(private http: HttpClient) {}

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
      endDate: rts.end_date
    };
    return ts;
  }
}
