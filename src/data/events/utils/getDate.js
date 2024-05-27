const getDate = ({ yearAM, yearCE, need = 'am', shift = 0, push = 'bc' }) => {
  let newDate;

  // NEED AM DATE -----
  if (need === 'am') {
    // already have AM date, no conversion necessary
    if (yearAM) return { year: yearAM, label: 'dateAM' };

    // have CE date > convert
    if (yearCE) {
      newDate = yearCE - shift;
      // NO YEAR ZERO!
      if (push === 'ad' && yearCE > 0) newDate--;
      if (push === 'bc' && yearCE < 0) newDate++;
      return { year: newDate, label: 'dateAM' };
    }

    // NEED CE DATE ---
  } else {
    // already have CE date, no conversion necessary
    if (yearCE) return { year: yearCE, label: yearCE > 0 ? 'dateAD' : 'dateBC' };

    // need CE and we have AM date > convert
    if (yearAM) {
      newDate = yearAM + shift;
      // NO YEAR ZERO!
      if (push === 'ad' && newDate >= 0) newDate++;
      if (push === 'bc' && newDate <= 0) newDate--;
      return { year: Math.abs(newDate), label: newDate > 0 ? 'dateAD' : 'dateBC' };
    }
  }

  // FAIL
  return { year: 1, label: '' };
};

export default getDate;
