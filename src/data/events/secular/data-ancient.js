// ANCIENT-ish HISTORY
const data = REVISED_PYRAMIDS => {
  const events = {
    // BC
    pyramidDjoser: { startCE: -2630, years: 2630 - 2610, fuzzy: true, buffer: 300, color: 'black' },
    pyramidsGiza: { startCE: -2550, years: 2550 - 2410, fuzzy: true, color: 'black' },

    assyrianEmpire: { startCE: -1900, years: 1900 - 607, color: 'black', fuzzyStart: true },
    babylonianEmpire: { startCE: -626, years: 626 - 539, color: 'black', fuzzyStart: true },
    achaemenianEmpire: { startCE: -539, years: 538 - 330, color: 'black' },

    confucious: { startCE: -551, years: 551 - 479 },
    buddha: { startCE: -563, years: 563 - 483 },
    socrates: { startCE: -470, years: 470 - 399 },
    plato: { startCE: -428, years: 428 - 348 },
    aristotle: { startCE: -384, years: 384 - 322 },
    alexander: { startCE: -356, years: 356 - 323 },

    // AD
    origen: { startCE: 185, years: 253 - 185, color: 'teal.4' },
    augustine: { startCE: 354, years: 430 - 354, color: 'teal.4' },
    muhammad: { startCE: 570, years: 632 - 570 },
    temple2end: { startCE: 70, color: 'lime.6' },
    nicaea1: { startCE: 325, color: 'teal.4' },
  };

  Object.keys(events).forEach(key => {
    events[key].years = events[key].years || 0;
    events[key].exact = events[key].exact ?? true;
    events[key].color = events[key].color || 'gray.6';
  });

  if (REVISED_PYRAMIDS) {
    events.pyramidDjoser.startCE += 200;
    events.pyramidsGiza.startCE += 200;

    // events.assyrianEmpire.startCE += 100;
    // events.assyrianEmpire.years += 100;
    // events.babylonianEmpire.startCE += 100;
    // events.babylonianEmpire.years += 100;
    // events.achaemenianEmpire.startCE += 100;
    // events.achaemenianEmpire.years += 100;

    // events.darius.startCE += 100;
    // events.xerxes.startCE += 100;
    // events.artaxerxes.startCE += 100;
  }

  return events;
};

export default data;
