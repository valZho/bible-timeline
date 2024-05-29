const thisYear = new Date().getFullYear();

// MODERN ERA
const eventData2 = () => {
  const events = {
    greatDepression: { startCE: 1929, years: 10 },
    israelReformed: { startCE: 1948, color: 'cyan' },
    moonLanding: { startCE: 1969 },
    today: { startCE: thisYear, color: 'orange' },
  };

  Object.keys(events).forEach(key => {
    events[key].years = events[key].years || 0;
    events[key].exact = events[key].exact ?? true;
    events[key].color = events[key].color || 'gray';
  });

  return events;
};

export default eventData2;
