const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain=[];
  let mail=email.split('');
  let i=0;
  while (i<mail.length&&mail[mail.length-1]!='@')
  {
    domain.push(mail.pop());
  }
  return domain.reverse().join('');
}

module.exports = {
  getEmailDomain
};
