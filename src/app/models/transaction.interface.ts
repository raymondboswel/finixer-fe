import { Party } from "./party.interface";

export interface PartyTransaction {
  amount: number;
  transaction_date: Date;
  party: Party[];
}
