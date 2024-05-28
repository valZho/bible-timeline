const thisYear = new Date().getFullYear();

const eventData1 = () => {
  const events = {
    pyramidDjoser: { startCE: -2630, years: 20, fuzzy: true },
    pyramidsGiza: { startCE: -2550, years: 140, fuzzy: true },
    temple2end: { startCE: 70 },
    israelReformed: { startCE: 1948 },
    today: { startCE: thisYear },
  };

  Object.keys(events).forEach(key => {
    events[key].years = events[key].years || 0;
    events[key].exact = true;
    events[key].color = 'gray';
  });

  return events;
};

export default eventData1;
