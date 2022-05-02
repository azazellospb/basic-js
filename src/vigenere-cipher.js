const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (boolean) 
  {
    this.boolean=boolean;
  }
repeatString(message, key)
{
  let keyMultiplied = key.split('');
  while (message.replace(/\s+/g, '').length>keyMultiplied.length){
    keyMultiplied.push(...keyMultiplied);
  }
  while (keyMultiplied.length>message.replace(/\s+/g, '').length) 
  {
    keyMultiplied.pop();
  }
  return keyMultiplied.join(''); 
}
encrypt(message, key) 
  {
    if(message==undefined) throw new Error('Incorrect arguments!');
    if(key==undefined) throw new Error('Incorrect arguments!');
    let encryptMessage=this.repeatString(message, key).toUpperCase();

    let messageArray=message.replace(/\s+/g, '').toUpperCase().split('');

    let preResult=encryptMessage.split('');

    for (let i=0; i<preResult.length; i++) 
    {
      if ((messageArray[i].charCodeAt(0)>64)&&(messageArray[i].charCodeAt(0)<91)) 
      {
        if (((preResult[i].charCodeAt(0)-65)+(messageArray[i].charCodeAt(0)-65))>25) preResult[i]= String.fromCharCode((preResult[i].charCodeAt(0)-65)+(messageArray[i].charCodeAt(0))-26);
        else preResult[i]= String.fromCharCode((preResult[i].charCodeAt(0)-65)+(messageArray[i].charCodeAt(0)));

      } 
      else preResult[i]=messageArray[i];
    }
    for (let i=0; i<message.length; i++){
      if(message[i].charCodeAt(0)==32) {
        preResult.splice(i,0,' ');
      }
    }
    encryptMessage=preResult.join('');
    if (this.boolean!=undefined&&this.boolean===false) {encryptMessage = encryptMessage.split('').reverse().join('')}
    return encryptMessage;
  }
decrypt(message, key) 
  { 
    if(message==undefined) throw new Error('Incorrect arguments!');
    if(key==undefined) throw new Error('Incorrect arguments!');
    let decryptMessage=this.repeatString(message, key).toUpperCase();

    let messageArray=message.replace(/\s+/g, '').toUpperCase().split('');

    let preResult=decryptMessage.split('');

    for (let i=0; i<preResult.length; i++) 
    {
      if ((messageArray[i].charCodeAt(0)>64)&&(messageArray[i].charCodeAt(0)<91)) 
      {
        if (messageArray[i].charCodeAt(0)-preResult[i].charCodeAt(0)>=0) preResult[i]= String.fromCharCode(65+((messageArray[i].charCodeAt(0)-preResult[i].charCodeAt(0))));
        else preResult[i]= String.fromCharCode(91+((messageArray[i].charCodeAt(0)-preResult[i].charCodeAt(0))));
      } 
      else preResult[i]=messageArray[i];
    }

    for (let i=0; i<message.length; i++)
    {
      if(message[i].charCodeAt(0)==32) {
        preResult.splice(i,0,' ');
      }
    }
    decryptMessage=preResult.join('');
    if (this.boolean!=undefined&&this.boolean===false) {decryptMessage = decryptMessage.split('').reverse().join('')}
    return decryptMessage;  
  }
}


module.exports = {
  VigenereCipheringMachine
};
