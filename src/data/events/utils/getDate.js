import round from './round';

/**
 * Get a converted date and a spreadable array to use in t() function
 * Note that the year can be positive (AM, AD) or negative (BC)
 * Note that the year in label is for display and always positive
 * @param {number} yearCE - the Gregorian date to process
 * @param {string} need - ['am', 'ce'] - which type of date do we need to return
 * @param {number} shift - the shift factor for converting dates
 * @param {string} push - ['ad', 'bc'] which dates get "pushed" when crossing year 0
 * @param {boolean} fuzzy - fuzzy dates? (changes label)
 * @param {boolean} isRuler - is the ruler the one making the request?
 * @param {boolean} isEnd - is this an end date? (otherwise beginning)
 * @returns - ( year: {number}, label: [{string}, { year: {number} }] )
 */
const getDate = ({ yearAM, yearCE, need = 'am', shift = 0, fuzzy = false, decimals = 2, isRuler = false }) => {
  let newDate;

  const formatOutput = (year, type) => ({
    label: [`timeline.date${fuzzy ? 'Fuzzy' : ''}${type}`, { year: round(Math.abs(year), decimals) }],
    year,
  });

  switch (need) {
    case 'am':
      // already have AM
      if (yearAM) return formatOutput(yearAM, 'AM');

      // CONVERT: CE —> AM
      if (yearCE) {
        newDate = yearCE - shift;
        newDate += yearCE <= 0 ? 1 : -1;
        return formatOutput(newDate, 'AM');
      }
      break;

    case 'ce':
      // already have CE
      if (yearCE) return formatOutput(yearCE, yearCE > 0 ? 'AD' : 'BC');

      // CONVERT: AM —> CE
      if (yearAM) {
        newDate = yearAM + shift;
        // no year zero... have to shift dates left or right
        newDate += newDate >= 0 ? 1 : -1;
        // tick labels show in the space to the right
        // but BC goes in the other direction!
        // thus, we can just shift the BC labels by one
        // displays fine, and we don't have to mess with moving labels around
        if (isRuler && newDate <= 0) newDate++;
        return formatOutput(round(newDate, 1), newDate > 0 ? 'AD' : 'BC');
      }
      break;
  }

  // FAIL / FALLTHROUGH
  return { year: 1, label: '' };
};

export default getDate;
