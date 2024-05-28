/**
 * Get a converted date and a spreadable array to use in t() function
 * Note that the year can be positive (AM, AD) or negative (BC)
 * Note that the year in label is for display and always positive
 * @param {number} yearCE - the Gregorian date to process
 * @param {string} need - ['am', 'ce'] - which type of date do we need to return
 * @param {number} shift - the shift factor for converting dates
 * @param {string} push - ['ad', 'bc'] which dates get "pushed" when crossing year 0
 * @returns - ( year: {number}, label: [{string}, { year: {number} }] )
 */
const getDate = ({ yearAM, yearCE, need = 'am', shift = 0, push = 'bc' }) => {
  let newDate;

  // NEED AM DATE -----
  if (need === 'am') {
    // already have AM date, no conversion necessary
    if (yearAM) return { year: yearAM, label: ['timeline.dateAM', { year: yearAM }] };

    // have CE date > convert
    if (yearCE) {
      newDate = yearCE - shift;
      // NO YEAR ZERO!
      if (push === 'ad' && yearCE > 0) newDate--;
      if (push === 'bc' && yearCE < 0) newDate++;
      return { year: newDate, label: ['timeline.dateAM', { year: newDate }] };
    }

    // NEED CE DATE ---
  } else {
    // already have CE date, no conversion necessary
    if (yearCE)
      return { year: yearCE, label: [`timeline.${yearCE > 0 ? 'dateAD' : 'dateBC'}`, { year: Math.abs(yearCE) }] };

    // need CE and we have AM date > convert
    if (yearAM) {
      newDate = yearAM + shift;
      // NO YEAR ZERO!
      if (push === 'ad' && newDate >= 0) newDate++;
      if (push === 'bc' && newDate <= 0) newDate--;
      return { year: newDate, label: [`timeline.${newDate > 0 ? 'dateAD' : 'dateBC'}`, { year: Math.abs(newDate) }] };
    }
  }

  // FAIL
  return { year: 1, label: '' };
};

export default getDate;
