module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  let sum = 0;
  const result = matrix.flat().forEach(elem => {
    if (elem === '^^') {
      sum += 1;
    }
  })
  return sum;
};
