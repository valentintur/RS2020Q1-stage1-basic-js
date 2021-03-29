module.exports = function createDreamTeam(members) {
  //throw 'Not implemented';
  let arr = [];
  if (typeof(members) === 'object') {
    members.flat().forEach((elem) => {
      if (typeof(elem) === 'string') {
        elem = elem.trim();
        elem = elem.slice(-elem.length, -elem.length + 1).toUpperCase();
        arr.push(elem);
      } else {
        return false;
      }  
    });
    console.log(`arr sort: ${arr.sort().join('')}`);
    return arr.sort().join('');

  } false;
}