const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) { return false; }
  
  let names = [];
  
  //Define if it`s string and return array with transformed Uppercase strings 
  names = members.map(el => typeof el === 'string' ? String(el).toUpperCase().trim() : '');	
  //Sort array and grab first letters
  names = names.sort().reduce((result, item) => result + item.substring(0, 1), '')
  
  return names;
};
