const thisYear = new Date().getFullYear();

// MODERN ERA
const data = () => {
  const events = {
    schism: { startCE: 1054, years: 0, color: 'teal.5' },
    ottoman: { startCE: 1299, years: 1922 - 1299, color: 'dark.4' },
    blackDeath: { startCE: 1346, years: 1353 - 1346, color: 'gray.4' },
    gutenburg: { startCE: 1450, years: 10, fuzzy: true, color: 'teal.5' },
    calvin: { startCE: 1509, years: 1564 - 1509, color: 'teal.3' },
    reformation: { startCE: 1517, years: 1685 - 1517, color: 'teal.5' },
    greatDepression: { startCE: 1929, years: 10, color: 'gray.4' },
    deadSeaScrolls: { startCE: 1947, years: 0, color: 'gray.4' },
    israelReformed: { startCE: 1948, years: 0, color: 'lime.6' },
    moonLanding: { startCE: 1969, years: 0, color: 'gray.4' },
    today: { startCE: thisYear, years: 0, color: 'orange.5' },
  };

  Object.keys(events).forEach(key => {
    events[key].exact = events[key].exact ?? true;
  });

  return events;
};

export default data;
