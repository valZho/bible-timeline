import bibleData1 from './bible/data-1';
import bibleData2 from './bible/data-2';
import bibleData3 from './bible/data-3';
import bibleData4 from './bible/data-4';
import bibleData5 from './bible/data-5';

import secularData1 from './secular/data-1';

import convertToTimeline from './utils/convertToTimeline';

const getEvents = ({ ages, jubilee, ...options }) => {
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
  const INTERCALATED = jubilee === 'intercalated';

  const bibleEvents = {
    ...bibleData1(MT, LXX),
    ...bibleData2(MT, LXX),
    ...bibleData3(),
    ...bibleData4(),
    ...bibleData5(INTERCALATED),
  };

  const secularEvents = {
    ...secularData1(),
  };

  return convertToTimeline({ bibleEvents, secularEvents, ...options });
};

export default getEvents;
