const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {  
    return this.chain.length;  
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);     
    }
    else {
      this.chain = [];
      throw Error('wrong link');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;   
  },
  finishChain() {    
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};


module.exports = chainMaker;
