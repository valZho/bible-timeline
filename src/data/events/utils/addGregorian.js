import getDate from './getDate';

/**
 * Adds Gregorian (AD/BC) dates to the calendar events
 * All events must be fully parsed for AM before running this
 * @param {object} events
 * @param {string} knownKey - the event key we know the AD date for
 * @param {number} knownDate - the Gregorian date we know for the known event (negative numbers for BC)
 * @returns {number} the shift factor for converting dates
 */
const addGregorian = ({ events = {}, knownKey = 'messiah', knownDate = 30, start = false }) => {
  const relatedDate = start ? events[knownKey]?.startAM : events[knownKey].endAM;
  if (!relatedDate) return;

  const shift = knownDate + (start ? 1 : -1) - relatedDate;
  const push = knownDate > 0 ? 'ad' : 'bc';

  Object.keys(events).forEach(key => {
    events[key].startCE = getDate({ yearAM: events[key].startAM, need: 'ce', shift, push }).year;
    events[key].endCE = getDate({ yearAM: events[key].endAM, need: 'ce', shift, push }).year;
  });

  console.log('---->', events);

  return { shift, push: '' };
};

export default addGregorian;
