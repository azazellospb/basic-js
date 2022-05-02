const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.need.length;
  },
  addLink: function(value) {
    if (value===null) this.need[this.need.length]='null';
    if (typeof(value)=='boolean' || (typeof(value)=='number' && value!=Infinity)) this.need[this.need.length]=String(value);
    if (Object.prototype.toString.call(value)=='[object Object]') this.need[this.need.length]='[object Object]';
    if (value===Infinity) this.need[this.need.length]='Infinity';
    if (typeof(value)=='string') this.need[this.need.length]=value;
    if (typeof(value)=='function') this.need[this.need.length]='function () { }';
    return this;
  },
  removeLink: function(position) {
    if (position>0 && position<=this.need.length && Number.isInteger(position)) {
    this.need.splice(position-1, 1);
    return this;}
    else 
    {
      this.need=[];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain: function() {
    this.need.reverse();
    return this;
  },
  finishChain() {
    this.need.splice(this.need.length-1, 1, this.need[this.need.length-1] + ' )');
    this.need.splice(0, 1, '( '+this.need[0]);
    let a=this.need.join(' )~~( ');
    this.need=[];
    return a;

  },
  need:[],
};

module.exports = {
  chainMaker
};
