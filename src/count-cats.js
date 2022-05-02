const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let arr=array.flat(Infinity);
  let cats=0; 
  for (let i=0; i<arr.length; i++) {
  arr[i]=="^^" ? cats++ : console.log("Nope!");} 
  return cats;
}

module.exports = {
  countCats
};
