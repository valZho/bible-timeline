/**
 * Generate events from Exile to the Destruction of the 2nd Temple
 * @returns {object}
 */
const data = ({
  INTERCALATED = false,
  exileStart = 'deportation',
  decree = 'nehemiah',
  daniel69 = 'birth',
  birthYear = -3,
  ministryLength = 'three',
  crucifixion = 'baptism',
}) => {
  // length has to account for no year zero... move up by 1
  // these dates are inclusive by nature, so no need to adjust for that
  const jesusAge = crucifixion - birthYear - 1;
  const ministry = ministryLength === 'three' ? 2 : 1;

  const events = {
    exile: {
      relative: { id: exileStart === 'deportation' ? 'jehoiachin' : 'zedekiah', end: 0 },
      years: 70,
      exact: true,
      color: 'red.7',
    },
    dan69weeks: {
      relative: { id: 'exile', end: 0 },
      years: 69 * 7 + (INTERCALATED ? 9 : 0),
      exact: true,
      color: 'lime.6',
    },
    // total years crosses AD/BC threshhold so add year for no year zero
    messiah: { relative: { id: 'dan69weeks', end: 0 }, years: jesusAge, exact: true, color: 'yellow.6' },

    apostleJohn: {
      relative: { id: 'messiah', end: -20 },
      years: 90, // Lives ~90 years total
      color: 'green.7',
    },

    // WE NEED TO USE THESE TO GET A DATE FOR THE EXILE
    nebuchadnezzar: { relative: { id: 'exile', start: -19 }, exact: true, years: 43, color: 'cyan.7' },
    cyrus: { relative: { id: 'exile', start: 69.5 }, exact: true, years: 30, color: 'cyan.7' },
    darius: { relative: { id: 'cyrus', end: 0 }, exact: true, years: 36, color: 'cyan.7' },
    artaxerxes: { relative: { id: 'darius', end: 0 }, years: 41, color: 'cyan.7' },

    temple1end: { relative: { id: 'zedekiah', end: 0 }, years: 0, color: 'red.7' },
    temple2: { relative: { id: 'exile', end: 0 }, years: 21, color: 'lime.4' },
  };

  switch (decree) {
    case 'cyrus':
      events.dan69weeks.relative = { id: 'cyrus', start: 0 };
      break;

    case 'darius':
      events.dan69weeks.relative = { id: 'darius', start: 1 };
      break;

    case 'ezra':
      events.dan69weeks.relative = { id: 'artaxerxes', start: 6 };
      break;

    case 'nehemiah':
    default:
      events.dan69weeks.relative = { id: 'artaxerxes', start: 19 };
      break;
  }

  switch (daniel69) {
    case 'death':
      events.messiah.relative.end = 0 - jesusAge;
      break;

    case 'birth':
      events.messiah.relative.end = 0;
      break;

    case 'baptism':
    default:
      events.messiah.relative.end = 0 - jesusAge + ministry;
  }

  return events;
};

export default data;
