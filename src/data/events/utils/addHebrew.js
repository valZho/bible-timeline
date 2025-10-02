import getDate from './getDate';

const addHebrew = ({ events = {}, shift = 0 }) => {
  Object.keys(events).forEach(key => {
    events[key].startAM = getDate({ yearCE: events[key].startCE, need: 'am', shift }).year;
  });
};

export default addHebrew;
