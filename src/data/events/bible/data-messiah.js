/**
 * Generate events from Exile to the Destruction of the 2nd Temple
 * @returns {object}
 */
const eventData5 = (INTERCALATED = false) => {
  const events = {
    // exile: { relative: { id: 'zedekiah', end: 0 }, years: 70, exact: true, color: 'red.7' },
    exile: { startAM: 4795.5, years: 70, exact: true, color: 'red.7' },
    dan69weeks: {
      relative: { id: 'exile', end: 0 },
      years: 69 * 7 + (INTERCALATED ? 9 : 0),
      exact: true,
      color: 'lime',
    },
    messiah: { relative: { id: 'dan69weeks', end: -33 }, years: 33, exact: true, color: 'yellow.5' },
  };

  return events;
};

export default eventData5;
