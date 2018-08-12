export class Transaction {
  from: string;
  to: string;
  amount: number;
  timestamp: number;

  constructor(from: string, to: string, amount: number) {
    this.from = from;
    this.to = to;
    this.timestamp = Date.now();
    this.amount = amount;
  }

  toString() {
    var str = `${this.from}$${this.to}$${this.timestamp}$${this.amount}`;
    return str;
  }
}
