/**
 * Recursively process the events on the timeline adding them to the supplied "processed" object
 * Also sets the furthest right date (in pixels) for use in display
 * @param {string} key - the id of the event to process
 * @param {object} events - collection of all events
 * @param {object} processed - collection of processed events
 * @param {number} scale - {px} width of a single year
 * @param {boolean} margins - are margins being shown?
 * @param {number} farRight - {px} the furthest-right event by width
 * @param {lastDate}
 * @returns {object} - the event processed
 */
const parseEvents = ({ key = '', events = {}, processed = {}, scale = 2, margins = false, farRight = 0 }) => {
  // If no key or already processed, just return
  if (!key) return { related: {}, farRight };
  if (processed[key]) return { related: processed[key], farRight };

  // INITIALIZE OUTPUT
  const src = events[key];

  // THIS WILL CAUSE RECURSIVE PROCESSING OF THE LIST
  const { related, farRight: relatedFarRight } = parseEvents({
    key: src.relative?.id,
    events,
    processed,
    scale,
    margins,
    farRight,
  });

  // PARSE THE EVENTS OBJECTS INTO A TIMELINE ARRAY
  // final processed[key] should an array of display object sorted by start date
  //
  // title (string)        <--- i18nKey
  // startAM (number)      <--- Year in AM of the start date (averaged)
  // endAM (number)        <--- Year in AM of the end date of the event (averaged)
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

  processed[key] = {
    ...src,
    key,
    years: src.years || 0,
    extraBuffer: src.extraBuffer || 0,
    marginWidth: (src.margin || 0) * 2 * scale,
    display: {
      color: src.color,
      hideEndDate: src.hideEndDate,
      track: 0,
    },
  };

  // START DATE & MARGIN START -------------------------
  // specific start date
  if (src.startAM) {
    processed[key].startAM = src.startAM;
    processed[key].marginStart = src.margin || 0;

    // start date relative to another event -- be careful about zero and negative values here!!!
  } else {
    let relativeStart = 0;
    let relatedDate = 0;
    let relatedMargin = 0;
    if (typeof src.relative?.start === 'number') {
      relativeStart = src.relative.start;
      relatedDate = related.startAM;
      relatedMargin = related.marginStart;
    } else if (typeof src.relative?.end === 'number') {
      relativeStart = src.relative.end;
      relatedDate = related.endAM;
      relatedMargin = related.marginEnd;
    }

    // if a year or more relative, add a ±6month margin unless flagged as exact
    let addMargin = relativeStart < 0 ? 0.5 : -0.5;
    if (src.exact || src.exactStart || Math.abs(relativeStart) < 1) addMargin = 0;

    processed[key].startAM = relatedDate + relativeStart + addMargin;
    processed[key].marginStart = relatedMargin + (src.margin || 0);
  }

  // END DATE & MARGIN END -------------------------
  processed[key].endAM = processed[key].startAM + src.years - (src.exact || src.exactEnd ? 0 : 0.5);
  processed[key].marginEnd = processed[key].marginStart + (src.exact || src.exactEnd ? 0 : 0.5);

  // CALCULATE DISPLAY -------------------------
  // start values
  processed[key].display.dateStart = (processed[key].startAM - 1 || 0) * scale;
  processed[key].display.marginStart = margins ? processed[key].marginStart * scale : 0;
  processed[key].display.left = processed[key].display.dateStart - processed[key].display.marginStart;

  // end values
  processed[key].display.dateEnd = (processed[key].endAM - 1 || 0) * scale;
  processed[key].display.marginEnd = margins ? processed[key].marginEnd * scale : 0;
  processed[key].display.right = processed[key].display.dateEnd + processed[key].display.marginEnd;

  // width values
  processed[key].display.width = processed[key].display.dateEnd - processed[key].display.dateStart;
  processed[key].display.fullWidth = processed[key].display.right - processed[key].display.left;

  return {
    related: processed[key],
    farRight: Math.max(farRight, relatedFarRight, processed[key].display.right),
  };
};

export default parseEvents;
