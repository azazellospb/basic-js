const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let regex = /[^.]+$/g;
  let results=[...domains];
  let obj={};
  let partnext='';
  while (results.length>0) {    
    for (let i=0; i<results.length; i++) {if (!results[i].includes('.')) results[i]='.'+results[i]}
    let part = (results.find(adress=>adress.match(regex)[0])).match(regex)[0];
    obj[partnext+`.${part}`]=results.filter(adress => adress.includes(part)).length;
    results=results.map(function(x){return x.replace(`.${part}`,'');}); // функция замены части строки в массиве строк при помощи метода map из стандарта ECMA-262
    results=results.filter(adress=>adress.length>2);
   // if (!results.every(elem=>elem.match(/[a-z][.]/))&&results.length!=1) partnext+=`.${part}`;
    partnext+=`.${part}`;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
