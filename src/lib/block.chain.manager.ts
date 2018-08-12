import { BlockChain, Block } from '../models/index';

export class BlockChainManager {
  blocks: Block[] = [];
  blockChain: BlockChain;

  constructor(headBlock: Block) {
    this.blocks.push(headBlock);
    this.blockChain = new BlockChain(headBlock);
  }

  add(block: Block) {}
}
