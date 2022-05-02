const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result=str.split('');
  let arr=[];
  while (result.length>0) {
    let j=0;
    while(result[j]==result[j+1]) {j++;}
    if (j!=0) arr.push(j+1);
    if (j==0) {arr.push(result.shift(result[j])); continue;}
    if (j>0) {result.splice(0,j); arr.push(result.shift(result[0])); continue;}
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
