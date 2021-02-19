const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

  let subDepth = 0;
  let result = 1;
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          subDepth = this.calculateDepth(arr[i]) + 1; 
          if(subDepth > result) {
            result = subDepth;
          }              
      }        
    }
    return result;  
  }
} 
