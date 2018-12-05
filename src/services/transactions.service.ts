import { Injectable } from "@angular/core";
import Transaction from "../app/models/transaction";

@Injectable()
export class TranasactionsService {
  private transactions: Transaction[] = []


  Add(product: Transaction): void {
    this.transactions.push(product);
  }

  Remove(id): void {
    this.transactions = this.transactions.filter(product => product.id !== id);
  }

  Update(transaction): void {
    this.transactions.map(transaction => {
      if (transaction.id === transaction.id) {
        transaction = transaction;
      }
    });
  }

  Get(id: string): Transaction {
    return this.transactions.filter(transaction => transaction.id == id)[0];
  }

  GetAll(): Transaction[] {
    return this.transactions;
  }

}
