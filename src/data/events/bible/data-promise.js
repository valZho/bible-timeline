/**
 * Generate events from Abrahama to the taking of the Promised Land
 * @param {boolean} earlySojourn - use the early or late date for the Promise to Abraham?
 * @returns {object}
 */
const eventData3 = earlySojourn => {
  const events = {
    abraham: { relative: { id: 'terah', end: -75 }, years: 175, margin: 0.5 },
    isaac: { relative: { id: 'abraham', start: 100 }, years: 180, margin: 0.5 },
    jacob: { relative: { id: 'isaac', start: 60 }, years: 147, margin: 0.5 },
    jacobInEgypt: { relative: { id: 'jacob', end: -17 }, years: 17, exact: true, color: 'lime.6' },
    egyptFeastAndFamine: { relative: { id: 'jacobInEgypt', start: -9 }, years: 17, exact: true, color: 'lime.6' },
    joseph: { relative: { id: 'egyptFeastAndFamine', start: -30 }, years: 110, margin: 0.5 },
    josephEnslaved: { relative: { id: 'joseph', start: 17 }, years: 30 - 17, margin: 0.5, color: 'lime.6' },
    covenant: { relative: { id: 'isaac', start: -1 }, years: 0, exact: true, hideEndLabel: true, color: 'lime.6' },
    sojourn430: { relative: { id: 'isaac', start: earlySojourn ? -30 : -25 }, years: 430, color: 'lime.2' },
    sojourn400: {
      relative: { id: 'isaac', start: earlySojourn ? 0 : 5 },
      years: 400,
      exactStart: earlySojourn,
      color: 'lime.2',
    },
    sojourn450: {
      relative: { id: 'isaac', start: earlySojourn ? 0 : 5 },
      years: 450,
      exactStart: earlySojourn,
      color: 'lime.2',
    },
    exodus: {
      relative: { id: 'sojourn400', end: -0.5 },
      years: 0.5,
      exact: true,
      color: 'lime.2',
      hideEndDate: true,
    },
    moses: { relative: { id: 'exodus', start: -80 }, years: 120, margin: 0.5 },
    mosesMidian: { relative: { id: 'moses', start: 40 }, years: 40, margin: 0.5, color: 'lime.6' },
    joshua: { relative: { id: 'exodus', end: -39 }, years: 110, margin: 0.5 },
    wandering: { relative: { id: 'exodus', end: 0 }, years: 40, exact: true, color: 'lime.6' },
    conquering: { relative: { id: 'wandering', end: 0 }, years: 10, exact: true, fuzzyEnd: true, color: 'lime.6' },
    judges: { relative: { id: 'joshua', end: 0 }, years: 410, fuzzy: true, color: 'lime.6' },
  };

  return events;
};

export default eventData3;
