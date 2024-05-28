import getDate from './getDate';

const addHebrew = ({ events = {}, shift = 0, push = 'bc' }) => {
  Object.keys(events).forEach(key => {
    events[key].startAM = getDate({ yearCE: events[key].startCE, need: 'am', shift, push }).year;
  });
};

export default addHebrew;
