import { Tag } from "./../../models/tag.interface";
import { TransactionSet } from "./../../models/transaction-set.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Transaction } from "src/app/models/transaction.interface";
import { Party } from "src/app/models/party.interface";

interface RemoteTransactionSet {
  id: string;
  start_date: string;
  end_date: string;
  title: string;
}

interface RemoteParty {
  id: string;
  name: string;
  tags: RemoteTag[];
}

interface RemoteTag {
  id: string;
  name: string;
}

interface RemoteTransaction {
  id: string;
  amount: number;
  transaction_date: Date;
  party: RemoteParty;
}

interface GetTransactionSetResponse {
  data: RemoteTransactionSet[];
}

interface GetTransactionsResponse {
  data: RemoteTransaction[];
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

  getTransactions(transactionSetId: string) {
    return this.http
      .get(
        `http://localhost:4000/api/transaction_sets/${transactionSetId}/transactions`
      )
      .pipe(
        map((r: any) => {
          return r.data.map(rt => this.convertToLocalTransaction(rt));
        })
      );
  }

  getUntaggedTransactions(transactionSetId: string) {
    return this.http
      .get(
        `http://localhost:4000/api/transaction_sets/${transactionSetId}/untagged_transactions`
      )
      .pipe(
        map((r: any) => {
          return r.data.map(rt => this.convertToLocalTransaction(rt));
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

  convertToLocalParty(rp: RemoteParty): Party {
    return {
      name: rp.name,
      id: rp.id,
      tags: rp.tags.map(this.convertToLocalTag)
    };
  }

  convertToLocalTag(rt: RemoteTag): Tag {
    return {
      id: rt.id,
      name: rt.name
    };
  }

  convertToLocalTransaction(rt: RemoteTransaction): Transaction {
    return {
      amount: rt.amount,
      id: rt.id,
      party: this.convertToLocalParty(rt.party),
      transactionDate: rt.transaction_date
    };
  }
}
