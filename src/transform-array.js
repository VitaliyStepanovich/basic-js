const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Array expected');
  } 
    
  let transformArr =  arr.reduce((acc, value, index, array) => {	
    
    switch(value) { 
      case '--discard-prev':          
        acc.pop();
        break; 

      case '--double-prev':        
        acc.push(acc[acc.length-1]);	 
        break;

      default:        
        switch(array[index-1]) {
          case '--discard-next':
            break;
          case '--double-next':
            acc.push(value);
            acc.push(value);	 
            break;
          default:
            acc.push(value);
            break;
        }
        break;	  
    }	
    return acc;
  }, []);	

  return transformArr.filter(item => !['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(item) && item !== undefined );

}
