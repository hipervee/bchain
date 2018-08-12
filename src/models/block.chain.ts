import { Block } from './block.model';

export class BlockChain {
  blocks: Block[];

  constructor(block: Block) {
    this.blocks = [block];
  }

  add(block: Block) {
    var lastBlock = this.blocks[this.blocks.length - 1];
    //add block to the chain
    this.blocks.push(block);
    lastBlock.attachTo(block.id);
  }

  traverse() {
    var headBlock = this.blocks[0];
    while (headBlock) {
      console.log(headBlock.id);
      var nextBlock = this.blocks.filter(o => o.id == headBlock.next)[0];
      headBlock = nextBlock;
    }
  }
}
