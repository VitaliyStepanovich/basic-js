const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  let result = '';

  let repeatTimes = options.repeatTimes || 1;  
  let separator = options.separator || '+';
  let addition = options.addition !== undefined  ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|'
  
  for (let i = 0; i < repeatTimes; i++)  {
    
    result += i > 0 ? separator : '';
    result += str;    
    
    for (let j = 0; j < additionRepeatTimes; j++)  {
      result += j > 0 ? additionSeparator : '';
      result += addition;
    }

  }  
 return result;

}
