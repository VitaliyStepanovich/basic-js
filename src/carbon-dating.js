const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string') { 

  const sample = Number(sampleActivity);

  if (isNaN(sample) || sample > MODERN_ACTIVITY || sample <= 0 ) {
    return false;
  }

  let result = Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(result); 
  
  } else { return false;}
  
};
