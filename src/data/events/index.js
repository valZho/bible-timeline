import adamToFlood from './adamToFlood';
import shemToTerah from './shemToTerah';

import convertToTimeline from './convertToTimeline';

const getBiblicalEvents = ({ ages, scale, margins }) => {
  // FIRST GENERATE A KEYED OBJECT OF EVENTS
  // using an object first makes it much easier to reference events for doing relative dates
  //
  // title (string)          - i18n key for display of event
  // start (number)          - exact start year
  // years (number)          - length of event
  // margin (number)         - the margin of error for the start date +/- error
  // exact (boolean)         - do not add the normal +/- margin of error to the end date
  //
  // relative (object)       - for events with start dates relative to another event
  // relative.id (string)    - the id of the relative event
  // relative.start (number) - the number of years +/- to offset this event from the START of the related event
  // relative.end (number)   - the number of years +/- to offset this event from the END of the related event
  //
  // EXAMPLES
  // —— Exact start date
  // { title: 'timeline.adam', start: 1, years: 930, margin: { end: 0.5 } }
  //
  // —— Start date relative to START date of another event
  // { title: 'timeline.seth', relative: { id: 'adam', start: 230 }, years: 912, margin: { end: 0.5 } }
  //
  // —— Start date relative to END date of another event
  // { title: 'timeline.shem', relative: { id: 'flood', end: -98 }, years: 600, margin: { end: 0.5 } }
  //
  const MT = ages === 'mt';
  const LXX = ages === 'lxx';
  const biblicalEvents = {
    ...adamToFlood(MT, LXX),
    ...shemToTerah(MT, LXX),
  };

  return convertToTimeline({ events: biblicalEvents, scale, margins });
};

export { getBiblicalEvents };
