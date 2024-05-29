// ANCIENT-ish HISTORY
const eventData1 = () => {
  const events = {
    pyramidDjoser: { startCE: -2630, years: 2630 - 2610, fuzzy: true, buffer: 300 },
    pyramidsGiza: { startCE: -2550, years: 2550 - 2410, fuzzy: true },
    temple2end: { startCE: 70, color: 'cyan' },
    niceanCouncil: { startCE: 70, color: 'lime' },
    blackDeath: { startCE: 1346, years: 1353 - 1346 },
    reformation: { startCE: 1517, years: 1685 - 1517, color: 'green' },
  };

  Object.keys(events).forEach(key => {
    events[key].years = events[key].years || 0;
    events[key].exact = events[key].exact ?? true;
    events[key].color = events[key].color || 'gray';
  });

  return events;
};

export default eventData1;
