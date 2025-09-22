// ANCIENT-ish HISTORY
const data = ROHLS_CHRONOLOGY => {
  const events = {
    // BC
    pyramidDjoser: { startCE: -2670, years: 20, fuzzy: true, buffer: 300, color: 'gray.6' },
    pyramidsGiza: { startCE: -2580, years: 20, fuzzy: true, color: 'gray.6' },
    ancientAssyria: { startCE: -2025, years: 2025 - 609, color: 'black', fuzzy: true },

    babylonianEmpire: { startCE: -626, years: 626 - 539, color: 'black', fuzzyStart: true },

    persianEmpire: { startCE: -539, years: 539 - 330, color: 'black' },

    confucious: { startCE: -551, years: 551 - 479 },
    buddha: { startCE: -563, years: 563 - 483 },
    socrates: { startCE: -470, years: 470 - 399 },
    plato: { startCE: -428, years: 428 - 348 },
    aristotle: { startCE: -384, years: 384 - 322 },
    alexander: { startCE: -356, years: 356 - 323 },

    maccabean: { startCE: -167, years: 7 },
    hasmonean: { startCE: -167, years: 25 },

    // AD
    gospelMark: { startCE: 65, years: 5, fuzzy: true, color: 'green.7' },
    gospelMatt: { startCE: 75, years: 5, fuzzy: true, color: 'green.7' },
    gospelLuke: { startCE: 80, years: 10, fuzzy: true, color: 'green.7' },
    gospelJohn: { startCE: 90, years: 10, fuzzy: true, color: 'green.7' },
    revelation: { startCE: 90, years: 6, fuzzy: true, color: 'green.7' },

    origen: { startCE: 185, years: 253 - 185, color: 'teal.4' },
    augustine: { startCE: 354, years: 430 - 354, color: 'teal.4' },
    muhammad: { startCE: 570, years: 632 - 570 },
    temple2end: { startCE: 70, color: 'red.7' },
    nicaea1: { startCE: 325, color: 'teal.4' },

    byzantine: { startCE: 330, years: 1453 - 330, color: 'black' },
  };

  Object.keys(events).forEach(key => {
    events[key].years = events[key].years || 0;
    events[key].exact = events[key].exact ?? true;
    events[key].color = events[key].color || 'gray.6';
  });

  if (ROHLS_CHRONOLOGY) {
    events.pyramidDjoser.startCE = -2250;
    events.pyramidsGiza.startCE = -2150;

    events.ancientAssyria.startCE = -2000;
    events.ancientAssyria.years = 2000 - 609;
  }

  return events;
};

export default data;
