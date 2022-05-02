const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result=0;
  result=String(n).split('');
  result.splice(0,1);
  result=result.join('')*1;
  for (let i=1; i<String(n).length; i++) {
    let variable =String(n).split('');
    variable.splice(i,1);
    variable=variable.join('')*1;
    if (result < variable) result=variable;
  }
  return result;
}

module.exports = {
  deleteDigit
};
