const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error();
  } 

  const sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let transformArr = [...arr];

  transformArr =  transformArr.reduce((acc, value, index, array) => {	
    switch(true) {
      case value == sequences[0]:
      array[index + 1] !== undefined  ? array.splice(index + 1, 1) : null;
      break;

    case value == sequences[1]:
      array[index - 1] !== undefined ? array.splice(index - 1, 1) : null;	 
      break;

    case value == sequences[2]:
      array[index + 1] !== undefined ? array[index] = array[index + 1] : null;	 
      break;		

    case value == sequences[3]:
      array[index - 1] !== undefined ? array[index] = array[index - 1] : null;	 
      break;
  
    default:   
      break;	  
  }	

  return array;
  }, []);	

  return transformArr.filter(item => !sequences.includes(item));

}
