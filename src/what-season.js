module.exports = function getSeason(/*date*/) {
  throw 'Not implemented';
/*
  if (date === 'no-value') return 'Unable to determine the time of year!'

  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Caught fake date');

    let month = date.getMonth();

    if (month == 11 || month == 0 || month == 1) {
      return 'winter';
    } else if (month == 2 || month == 3 || month == 4)  {
      return 'spring';
    } else if (month == 5 || month == 6 || month == 7)  {
      return 'summer';
    } else (month == 8 || month == 9 || month == 10)  {
      return 'autumn';
    }
  }
*/
};
