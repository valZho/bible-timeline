const thisYear = new Date().getFullYear();

// MODERN ERA
const data = () => {
  const events = {
    schism: { startCE: 1054, years: 0, color: 'lime' },
    ottoman: { startCE: 1299, years: 1922 - 1299 },
    blackDeath: { startCE: 1346, years: 1353 - 1346 },
    gutenburg: { startCE: 1450, years: 10, fuzzy: true, color: 'lime' },
    calvin: { startCE: 1509, years: 1564 - 1509, color: 'lime' },
    reformation: { startCE: 1517, years: 1685 - 1517, color: 'lime' },
    greatDepression: { startCE: 1929, years: 10 },
    deadSeaScrolls: { startCE: 1947, years: 0 },
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

export default data;
