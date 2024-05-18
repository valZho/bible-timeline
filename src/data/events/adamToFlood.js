/**
 * Generate events from Adam to the Flood
 * @param {boolean} MT - is Masoretic selected?
 * @param {boolean} LXX - is Septuagint selected?
 * @returns {object}
 */
const adamToFlood = (MT, LXX) => {
  // it's easier to create objects as they appear in Bible
  // and then normalize them to our event format afterwards
  const events = {
    adam: {
      start: 1,
      hadChildrenAt: MT ? 130 : 230,
      years: 930,
    },
    seth: {
      relative: { id: 'adam' },
      hadChildrenAt: MT ? 105 : 205,
      years: 912,
    },
    enosh: {
      relative: { id: 'seth' },
      hadChildrenAt: MT ? 90 : 190,
      years: 905,
    },
    kenan: {
      relative: { id: 'enosh' },
      hadChildrenAt: MT ? 70 : 170,
      years: 910,
    },
    mahalalel: {
      relative: { id: 'kenan' },
      hadChildrenAt: MT ? 65 : 165,
      years: 895,
    },
    jared: {
      relative: { id: 'mahalalel' },
      hadChildrenAt: 162,
      years: 962,
    },
    enoch: {
      relative: { id: 'jared' },
      hadChildrenAt: MT ? 65 : 165,
      years: 365,
    },
    methuselah: {
      relative: { id: 'enoch' },
      hadChildrenAt: 187,
      years: 969,
    },
    lamech: {
      relative: { id: 'methuselah' },
      hadChildrenAt: LXX ? 182 : 188,
      years: LXX ? 777 : 753,
    },
    noah: {
      relative: { id: 'lamech' },
      hadChildrenAt: 600,
      years: 950,
    },
    flood: {
      relative: { id: 'noah' },
      years: 1,
    },
  };

  // normalize event objects
  Object.keys(events).forEach(key => {
    events[key].title = `timeline.${key}`;
    if (events[key].relative) {
      events[key].relative.start = events[events[key].relative.id].hadChildrenAt;
      delete events[events[key].relative.id].hadChildrenAt;
    }
  });

  return events;
};

export default adamToFlood;
