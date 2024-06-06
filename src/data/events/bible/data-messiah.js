/**
 * Generate events from Exile to the Destruction of the 2nd Temple
 * @returns {object}
 */
const data = (INTERCALATED = false, DANIEL_69 = 'birth') => {
  const events = {
    // exile: { relative: { id: 'zedekiah', end: 0 }, years: 70, exact: true, color: 'red.7' },
    exile: { startAM: 4796, years: 70, exact: true, color: 'red.7' },
    dan69weeks: {
      relative: { id: 'exile', end: 0 },
      years: 69 * 7 + (INTERCALATED ? 9 : 0),
      exact: true,
      color: 'lime',
    },
    messiah: { relative: { id: 'dan69weeks' }, years: 33, exact: true, color: 'yellow.5' },
  };

  switch (DANIEL_69) {
    case 'death':
      events.messiah.relative.end = -33;
      break;

    case 'baptism':
      events.messiah.relative.end = -30;
      break;

    case 'birth':
    default:
      events.messiah.relative.end = 0;
  }

  return events;
};

export default data;
