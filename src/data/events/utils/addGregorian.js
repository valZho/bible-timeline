import getDate from './getDate';

/**
 * Adds Gregorian (AD/BC) dates to the calendar events
 * All events must be fully parsed for AM before running this
 * @param {object} events
 * @param {string} knownKey - the event key we know the AD date for
 * @param {number} knownDate - the Gregorian date we know for the known event (negative numbers for BC)
 * @param {boolean} start - use the start of the known event as our pinned date? if false, use end.
 * @returns {number} the shift factor for converting dates
 */
const addGregorian = ({ events = {}, knownKey = 'messiah', knownDate = 31, start = false }) => {
  const relatedDate = start ? events[knownKey]?.startAM : events[knownKey].endAM;
  if (!relatedDate) return;

  // round the related date because we care about the year level, not sub-year level
  const shift = knownDate - Math.round(relatedDate);

  Object.keys(events).forEach(key => {
    events[key].startCE = getDate({ yearAM: events[key].startAM, need: 'ce', shift }).year;
    events[key].endCE = getDate({ yearAM: events[key].endAM, need: 'ce', shift }).year;
  });

  return { shift, push: '' };
};

export default addGregorian;
