import { Party } from "./party.interface";

export interface Transaction {
  id: string;
  amount: number;
  transactionDate: Date;
  party: Party;
}
