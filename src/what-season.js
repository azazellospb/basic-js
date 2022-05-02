const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) 
{
  if(!date) return 'Unable to determine the time of year!'
  if (Object.getOwnPropertyNames(date).length > 0 || (Object.prototype.toString.call(date) !== '[object Date]')) {
      throw new Error('Invalid date!');
  }

  let  month = date.getMonth()
  {
    let seazons=
    {
      winter: [11,0,1], 
      autumn:[8,9,10], 
      summer: [5,6,7], 
      spring:[2,3,4]
    }
    for (var i in seazons) 
    {
      if (seazons[i].includes(date.getMonth())==true) return i;
    }
  }
}

module.exports = {
  getSeason
};
