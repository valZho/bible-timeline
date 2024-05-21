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
    adam: { startAm: 1, fatherAt: MT ? 130 : 230, years: 930, color: 'green' },
    seth: { relative: { id: 'adam' }, fatherAt: MT ? 105 : 205, years: 912 },
    enosh: { relative: { id: 'seth' }, fatherAt: MT ? 90 : 190, years: 905 },
    kenan: { relative: { id: 'enosh' }, fatherAt: MT ? 70 : 170, years: 910 },
    mahalalel: { relative: { id: 'kenan' }, fatherAt: MT ? 65 : 165, years: 895 },
    jared: { relative: { id: 'mahalalel' }, fatherAt: 162, years: 962 },
    enoch: { relative: { id: 'jared' }, fatherAt: MT ? 65 : 165, years: 365 },
    methuselah: { relative: { id: 'enoch' }, fatherAt: 187, years: 969 },
    lamech: { relative: { id: 'methuselah' }, fatherAt: LXX ? 182 : 188, years: LXX ? 777 : 753 },
    noah: { relative: { id: 'lamech' }, fatherAt: 600, years: 950 },
    flood: { relative: { id: 'noah' }, years: 1, exact: true, color: 'red', extraBuffer: 500 },
  };

  // normalize event objects
  Object.keys(events).forEach(key => {
    events[key].title = `events.${key}`;
    if (key !== 'adam') events[key].margin = 0.5;
    if (events[key].relative) {
      events[key].relative.start = events[events[key].relative.id].fatherAt;
      delete events[events[key].relative.id].fatherAt;
    }
  });

  return events;
};

export default adamToFlood;
