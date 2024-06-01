// ANCIENT-ish HISTORY
const data = () => {
  const events = {
    // BC
    pyramidDjoser: { startCE: -2630, years: 2630 - 2610, fuzzy: true, buffer: 300 },
    pyramidsGiza: { startCE: -2550, years: 2550 - 2410, fuzzy: true },
    assyrianEmpire: { startCE: -1363, years: 1363 - 609 },
    achaemenianEmpire: { startCE: -538, years: 538 - 330 },
    confucious: { startCE: -551, years: 551 - 479 },
    buddha: { startCE: -563, years: 563 - 483 },
    socrates: { startCE: -470, years: 470 - 399 },
    plato: { startCE: -428, years: 428 - 348 },
    aristotle: { startCE: -384, years: 384 - 322 },
    alexander: { startCE: -356, years: 356 - 323 },

    // AD
    origen: { startCE: 185, years: 253 - 185, color: 'lime' },
    augustine: { startCE: 354, years: 430 - 354, color: 'lime' },
    muhammad: { startCE: 570, years: 632 - 570 },
    temple2end: { startCE: 70, color: 'cyan' },
    nicaea1: { startCE: 325, color: 'lime' },
  };

  Object.keys(events).forEach(key => {
    events[key].years = events[key].years || 0;
    events[key].exact = events[key].exact ?? true;
    events[key].color = events[key].color || 'gray';
  });

  return events;
};

export default data;
