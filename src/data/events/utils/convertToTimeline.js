import parseEvents from './parseEvents';
import addGregorian from './addGregorian';
import addHebrew from './addHebrew';
import setTracks from './setTracks';

/**
 * Take a generated, keyed object of events and parse it into an iterable array
 * of sorted events, with all the necessary UI variables, ready display on the calendar
 * @param {object} events - a keyed object containing all the events to parse
 * @param {number} scale - the scale of the calendar - number of pixels wide per year
 * @param {truthy} margins - ['on', ''] - show margins of error?
 * @param {string} tracksOption - ['auto', '10', '20'] - the number of tracks to start with
 * @returns {array} - an array of events normalized for processed[key] to the timeline
 */
const convertToTimeline = ({
  bibleEvents = {},
  secularEvents = {},
  scale = 4,
  margins = true,
  trackMin = 'auto',
  crucifixion = 30,
}) => {
  // we need to hold processed data in an intermediate keyed object
  // so that we can reference them for relative dates
  const processed = {};

  // keep track of our max values for timeline display
  let farRight = 0;

  // RECURSIVELY PROCESS THE HEBREW DATES
  Object.keys(bibleEvents).forEach(key => {
    farRight = parseEvents({ key, events: bibleEvents, processed, scale, margins, farRight }).farRight;
  });

  // add Gregorian Dates
  const ceConvert = addGregorian({ events: processed, knownDate: crucifixion });

  // add Hebrew Dates to secular events
  addHebrew({ events: secularEvents, ...ceConvert });

  // RECURSIVELY PROCESS THE GREGORIAN DATES
  Object.keys(secularEvents).forEach(key => {
    farRight = parseEvents({ key, events: secularEvents, processed, scale, margins, farRight }).farRight;
  });

  // export events to an array and sort by start
  const eventArray = Object.keys(processed)
    .map(key => processed[key])
    .sort((a, b) => {
      // earlier dates should come first
      let sort = a.display.left - b.display.left;
      // if start dates are the same, put shorter bars first
      if (sort === 0) sort = a.display.fullWidth - b.display.fullWidth;
      return sort;
    });

  // place events in vertical tracks
  const { events: timeline, trackCount } = setTracks({ events: eventArray, trackMin, scale });

  return {
    events: timeline,
    ceConvert,
    farRight,
    trackCount,
  };
};

export default convertToTimeline;
