const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.reduce((a, b) => a.concat(b), []);
  return arr.reduce((sum, el) => sum + ((el == '^^') ? 1 : 0), 0);
};
