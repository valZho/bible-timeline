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
 * @returns - ( year: {number}, label: [{string}, { year: {number} }] )
 */
const getDate = ({ yearAM, yearCE, need = 'am', shift = 0, push = 'bc', fuzzy = false, decimals = 2 }) => {
  let newDate;

  const labelBase = `timeline.date${fuzzy ? 'Fuzzy' : ''}`;

  // NEED AM DATE -----
  if (need === 'am') {
    // already have AM date, no conversion necessary
    if (yearAM) return { year: yearAM, label: [`${labelBase}AM`, { year: round(yearAM, decimals) }] };

    // have CE date > convert
    if (yearCE) {
      newDate = round(yearCE - shift, decimals);
      // NO YEAR ZERO!
      if (push === 'ad' && yearCE > 0) newDate--;
      if (push === 'bc' && yearCE < 0) newDate++;
      return { year: newDate, label: [`${labelBase}AM`, { year: newDate }] };
    }

    // NEED CE DATE ---
  } else {
    // already have CE date, no conversion necessary
    if (yearCE)
      return {
        year: yearCE,
        label: [`${labelBase}${yearCE > 0 ? 'AD' : 'BC'}`, { year: round(Math.abs(yearCE), decimals) }],
      };

    // need CE and we have AM date > convert
    if (yearAM) {
      newDate = round(yearAM + shift);
      // NO YEAR ZERO!
      if (push === 'ad' && newDate >= 0) newDate++;
      if (push === 'bc' && newDate <= 0) newDate--;
      return {
        year: newDate,
        label: [`${labelBase}${newDate > 0 ? 'AD' : 'BC'}`, { year: round(Math.abs(newDate), decimals) }],
      };
    }
  }

  // FAIL
  return { year: 1, label: '' };
};

export default getDate;
