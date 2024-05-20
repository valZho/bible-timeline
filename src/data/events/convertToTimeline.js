/**
 * Take a generated, keyed object of events and parse it into an iterable array
 * of sorted events, with all the necessary UI variables, ready display on the calendar
 * @param {object} events - a keyed object containing all the events to parse
 * @param {number} scale - the scale of the calendar - number of pixels wide per year
 * @param {truthy} margins - ['on', ''] - show margins of error?
 * @param {string} jubilee - ['inclusive', 'exclusive', 'intercalated'] - jubilee calculation method
 * @returns {array} - an array of events normalized for processed[key] to the timeline
 */
const convertToTimeline = ({ events = {}, scale = 4 }) => {
  // PARSE THE EVENTS OBJECTS INTO A TIMELINE ARRAY
  // final processed[key] should an array of display object sorted by start date
  //
  // title (string)        <--- i18nKey
  // startAm (number)      <--- Year in AM of the start date (averaged)
  // endAm (number)        <--- Year in AM of the end date of the event (averaged)
  // marginStart (number)  <--- +/- margin of error at start (cumulative)
  // marginEnd (number)    <--- +/- margin of error at end (cumulative)
  //
  // display: {              <--- all pixel values are for absolute positioning
  //   left (pixels)         <--- the left side of the outer wrapper
  //   left (pixels)         <--- the right side of the outer wrapper
  //   width (pixels)        <--- full width of the outer wrapper
  //   startWidth (pixels)   <--- full width of the start margin — "start" will always be in the center of this
  //   endWidth (pixels)     <--- full width of the end margin — "end" will always be in the center of this
  // }

  // ————————————————————————————————————————————————————————————————————————————

  // we need to hold processed data in an intermediate keyed object
  // so that we can reference them for relative dates
  const processed = {};
  let toProcess = Object.keys(events);

  // we may need to loop over the events object multiple
  // times to make sure all dependencies are calculated
  let infiniteLoopProtection = 0;
  const maxLoops = 100;
  while (toProcess.length && infiniteLoopProtection < maxLoops) {
    toProcess.forEach(key => {
      const e = events[key];
      let r = processed[e.relative?.id];

      // related date not yet processed, skip for now
      if (e.relative && !r) return;

      // INITIALIZE OUTPUT
      processed[key] = {
        title: e.title,
        years: e.years,
        marginWidth: (e.margin || 0) * 2 * scale,
        display: {},
      };

      // START DATE & MARGIN START
      if (e.startAm) {
        processed[key].startAm = e.startAm;
        processed[key].marginStart = e.margin || 0;
      } else if (e.relative.start) {
        processed[key].startAm = r.startAm + e.relative.start - 0.5;
        processed[key].marginStart = r.marginStart + (e.margin || 0);
      } else if (e.relative.end) {
        processed[key].startAm = r.endAm + e.relative.end - 0.5;
        processed[key].marginStart = r.marginEnd + (e.margin || 0);
      }

      // END DATE & MARGIN END
      processed[key].endAm = processed[key].startAm + e.years - (e.exact ? 0 : 0.5);
      processed[key].marginEnd = processed[key].marginStart + (e.exact ? 0 : 0.5);

      // CALCULATE DISPLAY
      processed[key].display.startWidth = processed[key].marginStart * 2 * scale;
      processed[key].display.endWidth = processed[key].marginEnd * 2 * scale;
      processed[key].display.left = (processed[key].startAm - 1) * scale - processed[key].display.startWidth / 2;
      processed[key].display.right = (processed[key].endAm - 1) * scale + processed[key].display.endWidth / 2;
      processed[key].display.width = processed[key].display.right - processed[key].display.left;
    });

    // CLEAN UP BEFORE ATTEMPTING ANOTHER LOOP
    toProcess = toProcess.filter(key => !Object.keys(processed).includes(key));
    infiniteLoopProtection++;
  }

  // output all items in a sorted array
  return Object.keys(processed)
    .map(key => processed[key])
    .sort((a, b) => a.display.left - b.display.left);
};

export default convertToTimeline;
