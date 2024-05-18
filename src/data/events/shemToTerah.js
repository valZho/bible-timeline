/**
 * Generate events from Shem to Terah
 * @param {boolean} MT - is Masoretic selected?
 * @param {boolean} LXX - is Septuagint selected?
 * @returns {object}
 */
const shemToTerah = (MT, LXX) => {
  // it's easier to create objects as they appear in Bible
  // e.g.,
  // and then normalize them to our event format afterwards
  const events = {
    shem: {
      // Shem was 100 years old when he had Arphaxad which was 2 years after the flood
      // end of flood + 2 years - 100 years old
      relative: { id: 'flood', end: 2 - 100 },
      hadChildrenAt: 100,
      yearsAfterFirstChild: 500,
    },
    arphaxad: {
      relative: { id: 'shem' },
      hadChildrenAt: MT ? 35 : 135,
      yearsAfterFirstChild: MT ? 403 : LXX ? 400 : 430,
    },
    kainan: {
      relative: { id: 'arphaxad' },
      hadChildrenAt: 130,
      yearsAfterFirstChild: 330,
    },
    shelah: {
      relative: {
        id: MT ? 'arphaxad' : 'kainan',
      },
      hadChildrenAt: MT ? 30 : 130,
      yearsAfterFirstChild: MT ? 403 : LXX ? 330 : 403,
    },
    eber: {
      relative: { id: 'shelah' },
      hadChildrenAt: MT ? 34 : 134,
      yearsAfterFirstChild: MT ? 430 : LXX ? 270 : 370,
    },
    peleg: {
      relative: { id: 'eber' },
      hadChildrenAt: MT ? 30 : 130,
      yearsAfterFirstChild: LXX ? 209 : 207,
    },
    reu: {
      relative: { id: 'peleg' },
      hadChildrenAt: MT ? 32 : 132,
      yearsAfterFirstChild: 207,
    },
    serug: {
      relative: { id: 'reu' },
      hadChildrenAt: MT ? 30 : 130,
      yearsAfterFirstChild: 200,
    },
    nahor: {
      relative: { id: 'serug' },
      hadChildrenAt: MT ? 29 : LXX ? 179 : 79,
      yearsAfterFirstChild: MT ? 119 : LXX ? 125 : 129,
    },
    terah: {
      relative: { id: 'nahor' },
      years: 205,
    },
  };

  // MT skips Kainan
  if (MT) delete events.kainan;

  // normalize event objects
  Object.keys(events).forEach(key => {
    events[key].title = `timeline.${key}`;

    // set the years length for all but last item
    if (key !== 'terah') {
      events[key].years = events[key].hadChildrenAt + events[key].yearsAfterFirstChild;
      delete events[key].yearsAfterFirstChild;
    }

    // set relative start date for all but first item
    // Masoretic skips kainan
    if (key !== 'shem') {
      events[key].relative.start = events[events[key].relative.id].hadChildrenAt;
      delete events[events[key].relative.id].hadChildrenAt;
    }
  });

  return events;
};

export default shemToTerah;
