/**
 * Generate events from Shem to Terah
 * @param {boolean} MT - is Masoretic selected?
 * @param {boolean} LXX - is Septuagint selected?
 * @returns {object}
 */
const eventData2 = (MT, LXX) => {
  // it's easier to create objects as they appear in Bible
  // and then normalize them to our event format afterwards
  const events = {
    // Shem was 100 years old when he had Arphaxad which was 2 years after the flood
    // end of flood + 2 years - 100 years old
    shem: { relative: { id: 'arphaxad', start: -100 }, fatherAt: 100, yearsAfter: 500 },
    arphaxad: { relative: { id: 'flood', end: 2 }, fatherAt: MT ? 35 : 135, yearsAfter: MT ? 403 : LXX ? 400 : 430 },
    kainan: { relative: { id: 'arphaxad' }, fatherAt: 130, yearsAfter: 330 },
    shelah: {
      relative: { id: MT ? 'arphaxad' : 'kainan' },
      fatherAt: MT ? 30 : 130,
      yearsAfter: MT ? 403 : LXX ? 330 : 403,
    },
    eber: { relative: { id: 'shelah' }, fatherAt: MT ? 34 : 134, yearsAfter: MT ? 430 : LXX ? 270 : 370 },
    peleg: { relative: { id: 'eber' }, fatherAt: MT ? 30 : 130, yearsAfter: LXX ? 209 : 207 },
    reu: { relative: { id: 'peleg' }, fatherAt: MT ? 32 : 132, yearsAfter: 207 },
    serug: { relative: { id: 'reu' }, fatherAt: MT ? 30 : 130, yearsAfter: 200 },
    nahor: { relative: { id: 'serug' }, fatherAt: MT ? 29 : LXX ? 179 : 79, yearsAfter: MT ? 119 : LXX ? 125 : 129 },
    terah: { relative: { id: 'nahor' }, years: 205 },
  };

  // MT skips Kainan
  if (MT) delete events.kainan;

  // normalize event objects
  Object.keys(events).forEach(key => {
    events[key].margin = 0.5;

    // set the years length for all but last item
    if (key !== 'terah') {
      events[key].years = events[key].fatherAt + events[key].yearsAfter;
    }

    // shem and arphaxad are weird
    if (key !== 'shem' && key !== 'arphaxad') {
      events[key].relative.start = events[events[key].relative.id].fatherAt;
    }
  });

  // cleanup
  Object.keys(events).forEach(key => {
    delete events[key].yearsAfter;
    delete events[key].fatherAt;
  });

  // This is just guesswork based on the ages and birth years of the others and the fact the nimrod is Shem's grandson
  events.nimrod = {
    relative: { id: 'shem', start: MT ? 120 : 260 },
    years: MT ? 430 : 500,
    fuzzy: true,
    color: 'blue.4',
  };
  events.daniel = { relative: { id: 'exile', start: -16 }, years: 85, fuzzy: true, color: 'blue.4' };

  events.babel = { relative: { id: 'peleg', start: -5 }, years: 10, fuzzy: true, hideEndDate: true, color: 'lime.5' };

  return events;
};

export default eventData2;
