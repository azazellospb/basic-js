const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) 
{
  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new Error("'arr' parameter must be an instance of the Array!");}
  let internalArray = [...array]
  for (let j=0; j<internalArray.length; j++)
  { 
    if ((internalArray[j]=='--discard-next')&&(j!=internalArray.length-1)&&(typeof(internalArray[j+1]) !='string')) internalArray.splice(j,2);
    else if ((internalArray[j]=='--discard-prev')&&(j!=0)&&(typeof(internalArray[j-1]) !='string')) internalArray.splice(j-1,2);
    else if ((internalArray[j]=='--double-prev')&&(j!=0)&&(typeof(internalArray[j-1]) !='string')) internalArray.splice(j,1,internalArray[j-1]);
    else if ((internalArray[j]=='--double-next')&&(j!=internalArray.length-1)&&(typeof(internalArray[j+1]) !='string')) internalArray.splice(j,1,internalArray[j+1]);
  }
  return internalArray.filter(cell=> cell!='--double-prev'&&cell!='--double-next'&&cell!='--discard-prev'&&cell!='--discard-next');
}

module.exports = {
  transform
};
