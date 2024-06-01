import bible_patriarchs1 from './bible/data-patriarchs1';
import bible_patriarchs2 from './bible/data-patriarchs2';
import bible_promise from './bible/data-promise';
import bible_kingdoms from './bible/data-kingdoms';
import bible_messiah from './bible/data-messiah';

import secular_ancient from './secular/data-ancient';
import secular_modern from './secular/data-modern';
import secular_rome from './secular/data-rome';
import secular_wars from './secular/data-wars';

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
    ...bible_patriarchs1(MT, LXX),
    ...bible_patriarchs2(MT, LXX),
    ...bible_promise(),
    ...bible_kingdoms(),
    ...bible_messiah(INTERCALATED),
  };

  const secularEvents = {
    ...secular_ancient(),
    ...secular_modern(),
    ...secular_rome(),
    ...secular_wars(),
  };

  return convertToTimeline({ bibleEvents, secularEvents, ...options });
};

export default getEvents;
