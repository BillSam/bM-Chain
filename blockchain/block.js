const SHA256  = require('crypto-js/sha256');
class Block{
  constructor(timeStamp, lastHash, hash, data){
    this.timeStamp = timeStamp;
    this.lastHash = lastHash;
    this.hash =hash;
    this.data = data;
  }

  toString(){
    return `Block -
      TimeStamp: ${this.timeStamp}
      LastHash : ${this.lastHash.toString(0,10)}
      Hash     : ${this.hash.toString(0,10)}
      Data     : ${this.data}`;
    }


  static genesis(){
    return new this('Genesis time','----','f51-h54',[]);

  }

  static mineBlock(lastBlock,data){
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp,lastHash,data);


    return new this(timestamp,lastHash,hash,data);
  }

  static hash(timestamp,lastHash,data){
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  }

  static blockHash(block){
    const { timestamp, lastHash, hash, data } =  block;
    return Block.hash(timestamp,lastHash,data);
  }
}

module.exports = Block;