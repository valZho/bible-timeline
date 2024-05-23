/**
 * Take a generated, keyed object of events and parse it into an iterable array
 * of sorted events, with all the necessary UI variables, ready display on the calendar
 * @param {object} events - a keyed object containing all the events to parse
 * @param {number} scale - the scale of the calendar - number of pixels wide per year
 * @param {truthy} margins - ['on', ''] - show margins of error?
 * @param {string} tracksOption - ['auto', '10', '20'] - the number of tracks to start with
 * @returns {array} - an array of events normalized for processed[key] to the timeline
 */
const convertToTimeline = ({ events = {}, scale = 4, margins = true, trackMin = 'auto' }) => {
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
  //   dateStart (pixels)    <--- the absolute position of the averaged date start
  //   dateEnd (pixels)      <--- the absolute position of the averaged date end
  //   marginStart (pixels)  <--- width of the start margin
  //   marginEnd (pixels)    <--- width of the end margin
  //   left (pixels)         <--- the left side of the outer wrapper
  //   right (pixels)        <--- the right side of the outer wrapper
  //   width (pixels)        <--- width from dateStart to dateEnd
  //   fullWidth (pixels)    <--- full width of the outer wrapper
  // }

  // ————————————————————————————————————————————————————————————————————————————

  // we need to hold processed data in an intermediate keyed object
  // so that we can reference them for relative dates
  const processed = {};
  let toProcess = Object.keys(events);

  // keep track of our max values for timeline display
  let farRight = 0;
  let lastDate = 1;

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
        key,
        title: e.title,
        years: e.years,
        extraBuffer: e.extraBuffer || 0,
        marginWidth: (e.margin || 0) * 2 * scale,
        display: {
          color: e.color,
          track: 0,
        },
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
      processed[key].display.dateStart = (processed[key].startAm - 1) * scale;
      processed[key].display.marginStart = margins ? processed[key].marginStart * scale : 0;
      processed[key].display.left = processed[key].display.dateStart - processed[key].display.marginStart;

      processed[key].display.dateEnd = (processed[key].endAm - 1) * scale;
      processed[key].display.marginEnd = margins ? processed[key].marginEnd * scale : 0;
      processed[key].display.right = processed[key].display.dateEnd + processed[key].display.marginEnd;

      processed[key].display.width = processed[key].display.dateEnd - processed[key].display.dateStart;
      processed[key].display.fullWidth = processed[key].display.right - processed[key].display.left;

      // UPDATE MAX VALUES
      farRight = Math.max(farRight, processed[key].display.right);
      lastDate = Math.max(lastDate, processed[key].endAm);
    });

    // CLEAN UP BEFORE ATTEMPTING ANOTHER LOOP
    toProcess = toProcess.filter(key => !Object.keys(processed).includes(key));
    infiniteLoopProtection++;
  }

  // export events to an array and sort by start
  const timeline = Object.keys(processed)
    .map(key => processed[key])
    .sort((a, b) => a.display.left - b.display.left);

  // set vertical tracks on events
  let trackCount = parseInt(trackMin, 10) || 1;
  let nextTrack = 0;
  let lastTrack = trackCount - 1;
  const tracks = Array(trackCount).fill(-500, 0, trackCount);
  const buffer = 0; // right-side pixel buffer before slotting new event on same track

  timeline.forEach(e => {
    let infiniteLoopProtection = 0;
    let addTrack = trackMin === 'all';
    console.log('====>', e.title, addTrack, trackMin);
    for (let t = nextTrack; t < trackCount && infiniteLoopProtection < trackCount + 2; t++, infiniteLoopProtection++) {
      if (tracks[t] + buffer + e.extraBuffer < e.display.left) {
        e.display.track = t;
        tracks[t] = e.display.right;
        nextTrack = t === lastTrack ? 0 : t + 1;
        break;
      }
      // reached the last track without placing, but didn't start at first track
      // reset t to start at first track and run loop again
      if (t === lastTrack && nextTrack > 0 && !addTrack) {
        console.log('NOPE!');
        t = -1;
        addTrack = true;
        continue;
      }

      // if we already reset the loop, then that means the event couldn't fit and
      // we need to add a new track
      tracks.push(-500);
      trackCount++;
      lastTrack++;
    }
  });

  return {
    farRight,
    lastDate,
    trackCount,
    events: timeline,
  };
};

export default convertToTimeline;
