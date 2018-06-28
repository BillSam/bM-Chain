const Block = require('./block');

class BlockChain{

    constructor(){
        this.chain = [Block.genesis()];
    }

    addBlock(data){

        const block = Block.mineBlock(this.chain[this.chain.length-1],data);

        this.chain.push(block);

        return block;
    }

    isValidChain(chain){
        //check if chain start with genesis block
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

        //compare block's lasthash with previous block hash one  in the chain
        for(let i=1; i < chain.length; i++){
            const block = chain[i];
            const lastBlock = chain[i-1];

            if(block.lastBlock !== lastBlock.hash || 
                block.hash !== Block.blockHash(block)){
            return false;
                }
                
        }
        return true;

    }


}

module.export = BlockChain;