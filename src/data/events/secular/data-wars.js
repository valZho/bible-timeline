// WARS
const data = () => {
  const events = {
    // war_7years: { startCE: 1756, end: 1763 },
    war_americanRevolution: { startCE: 1775, end: 1783 },
    war_americanCivil: { startCE: 1861, end: 1865 },
    war_wwi: { startCE: 1914, end: 1918 },
    war_wwii: { startCE: 1939, end: 1945 },
    // war_korean: { startCE: 1950, end: 1953 },
    war_vietnam: { startCE: 1955, end: 1975 },
    // war_cold: { startCE: 1947, end: 1991 },
    // war_gulf: { startCE: 1990, end: 1991 },
    // war_terror: { startCE: 2001, end: 2021 },
  };

  Object.keys(events).forEach(key => {
    events[key].exact = true;
    events[key].color = 'pink.2';
    events[key].years = events[key].end - events[key].startCE;
    delete events[key].end;
  });

  return events;
};

export default data;
