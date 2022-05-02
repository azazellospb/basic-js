const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

 function dateSample(samAct) {
  if (isNaN(samAct)||Math.ceil((Math.log(15/Math.ceil(samAct))*10000)/1.2094)==Infinity||typeof(samAct)!='string'||samAct.match("^[0]+")||samAct<0||samAct>15||isFinite(samAct)==false) return false; else return Math.ceil((Math.log(15/samAct)*5730)/0.693);
 }
module.exports = {
  dateSample
};
