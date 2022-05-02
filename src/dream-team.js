const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let sortMembers =[];
  Array.isArray(members)!=true ? false : sortMembers=members.filter(word => typeof(word) ==='string').map(f=>{return f.toUpperCase().replace(/\s+/, "");}).sort();
  let teamName='';
  for (let i=0; i<sortMembers.length; i++) {
    if (sortMembers[i].match("^[a-zA-Z]")!=null)
    teamName+=sortMembers[i].slice(0,1);
    else continue;
  }
  return teamName;
}

module.exports = {
  createDreamTeam
};
