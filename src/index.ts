//imports
import { Block, BlockChain } from './models/index';
import { Mock } from './mock';

var block = Mock.getSampleBlock();
var chain = new BlockChain(block);
var newBlock = Mock.getSampleBlock();
chain.add(newBlock);
chain.traverse();
console.log('ID', block.id);
