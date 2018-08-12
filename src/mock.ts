import { Transaction, Block } from './models/index';

export class Mock {
  static getSampleTransactions(): Transaction[] {
    var transactions: Transaction[] = [
      new Transaction('iampervaze@gmail.com', 'abid@gmail.com', 500),
      new Transaction('iampervaze@gmail.com', 'aijaz@gmail.com', 200)
    ];
    return transactions;
  }

  static getSampleBlock() {
    var block = new Block(this.getSampleTransactions());
    return block;
  }
}
