const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === 'undefined' || !date) {
    return 'Unable to determine the time of year!';    
  } 
 
  if (!date instanceof Date || !isFinite(date)) {
    throw Error;
  }

  const month = date.getMonth() + 1;
  let season = ''; 

  switch(true) {
    case (month >= 3 && month <= 5) :
    season = 'spring';
    break;
  case (month >= 6 && month <= 8):
    season = 'summer';
    break;
  case (month >= 9 && month <= 11):
    season = 'autumn';
    break;
  case (month == 12 || month >= 1 && month <= 2):
    season = 'winter';
    break;
  default: 
    break; 
  }
  
  return season; 
};
