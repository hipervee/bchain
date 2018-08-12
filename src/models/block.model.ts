import { Util } from '../lib/util';
import { Transaction } from './transaction.model';
export class Block {
  private _id: string;
  private transactions: Transaction[];
  private timestamp: number;
  private _next: string;

  constructor(transactions: Transaction[], next?: string) {
    this.transactions = transactions;
    this.timestamp = Date.now();
    this._next = next || '';
    this._id = this.hash();
  }

  get id(): string {
    return this._id;
  }

  get next(): string {
    return this._next;
  }

  public hash(): string {
    var transactionStr = this.transactions.map(o => o.toString()).join('$');
    var blockStr = `/$${transactionStr}$${this.timestamp}$/`;
    const hash = Util.hash(blockStr);
    console.log('HASHED', blockStr, 'TO', hash);
    return hash;
  }

  attachTo(id: string) {
    this._next = id;
  }
}
