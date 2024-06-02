/**
 * Generate events from Abrahama to the taking of the Promised Land
 * @returns {object}
 */
const eventData3 = () => {
  const events = {
    abraham: { relative: { id: 'terah', end: -75 }, years: 175, margin: 0.5 },
    isaac: { relative: { id: 'abraham', start: 100 }, years: 180, margin: 0.5 },
    jacob: { relative: { id: 'isaac', start: 60 }, years: 147, margin: 0.5 },
    jacobInEgypt: { relative: { id: 'jacob', end: -17 }, years: 17, exact: true, color: 'cyan' },
    egyptFeastAndFamine: { relative: { id: 'jacobInEgypt', start: -9 }, years: 17, exact: true, color: 'cyan' },
    joseph: { relative: { id: 'egyptFeastAndFamine', start: -30 }, years: 110, margin: 0.5 },
    josephEnslaved: { relative: { id: 'joseph', start: 17 }, years: 30 - 17, margin: 0.5, color: 'cyan' },
    // covenant: { relative: { id: 'isaac', start: -1 }, years: 0, exact: true, hideEndLabel: true, color: 'cyan' },
    sojourn430: { relative: { id: 'isaac', start: -30 }, years: 430, color: 'cyan' },
    sojourn400: { relative: { id: 'isaac', start: 0 }, years: 400, exactStart: true, color: 'cyan' },
    sojourn450: { relative: { id: 'isaac', start: 0 }, years: 450, exactStart: true, color: 'cyan' },
    exodus: { relative: { id: 'sojourn400', end: -0.5 }, years: 0.5, exact: true, color: 'cyan', hideEndDate: true },
    moses: { relative: { id: 'exodus', start: -80 }, years: 120, margin: 0.5 },
    mosesMidian: { relative: { id: 'moses', start: 40 }, years: 40, margin: 0.5, color: 'cyan' },
    joshua: { relative: { id: 'exodus', end: -39 }, years: 110, margin: 0.5 },
    wandering: { relative: { id: 'exodus', end: 0 }, years: 40, exact: true, color: 'cyan' },
    conquering: { relative: { id: 'wandering', end: 0 }, years: 10, exact: true, fuzzyEnd: true, color: 'cyan' },
    judges: { relative: { id: 'joshua', end: 0 }, years: 410, fuzzy: true, color: 'cyan' },
  };

  return events;
};

export default eventData3;
