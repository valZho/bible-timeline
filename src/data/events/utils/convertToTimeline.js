import parseEvents from './parseEvents';
import addGregorian from './addGregorian';
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
const convertToTimeline = ({ events = {}, scale = 4, margins = true, trackMin = 'auto', crucifixion = 30 }) => {
  // we need to hold processed data in an intermediate keyed object
  // so that we can reference them for relative dates
  const processed = {};

  // keep track of our max values for timeline display
  let farRight = 0;

  // KICK OFF THE PROCESSING LOOP!
  Object.keys(events).forEach(key => {
    farRight = parseEvents({ key, events, processed, scale, margins, farRight }).farRight;
  });

  // add Gregorian Dates
  const ceConvert = addGregorian({ events: processed, knownDate: crucifixion });

  // export events to an array and sort by start
  const eventArray = Object.keys(processed)
    .map(key => processed[key])
    .sort((a, b) => a.display.left - b.display.left);

  // place events in vertical tracks
  const { events: timeline, trackCount } = setTracks({ events: eventArray, trackMin });

  return {
    events: timeline,
    ceConvert,
    farRight,
    trackCount,
  };
};

export default convertToTimeline;
