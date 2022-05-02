const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr='';
  if(options.separator==undefined) options.separator='+';
  if(options.addition===null) options.addition='null';
  else if(options.addition==undefined) options.addition='';
  if(options.additionSeparator==undefined) options.additionSeparator='|';
  if (options.repeatTimes==undefined) options.repeatTimes=1;
  if (options.additionRepeatTimes==undefined) options.additionRepeatTimes=1;
  options.repeatTimes=+options.repeatTimes;
  options.additionRepeatTimes=+options.additionRepeatTimes;
  let addToString =[];
  for (let j=0; j<options.additionRepeatTimes; j++)
    {
      addToString.push(String(options.addition));
    }
    newStr=String(str)+addToString.join(String(options.additionSeparator));
    addToString=[];
    for (let i=0; i<options.repeatTimes; i++) {
      addToString.push(newStr);
    }  
  return newStr=addToString.join(String(options.separator));


}

module.exports = {
  repeater
};
