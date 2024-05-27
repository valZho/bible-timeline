/**
 * Generate events from Exile to the Destruction of the 2nd Temple
 * @returns {object}
 */
const eventData5 = (intercalated = false) => {
  const events = {
    exile: { relative: { id: 'temple1start', end: 430 }, years: 70, exact: true, color: 'red' },
    dan69weeks: {
      relative: { id: 'exile', end: 0 },
      years: 69 * 7 + (intercalated ? 9 : 0),
      exact: true,
      color: 'lime',
    },
    messiah: { relative: { id: 'dan69weeks', end: -33 }, years: 33, exact: true },
  };

  return events;
};

export default eventData5;
