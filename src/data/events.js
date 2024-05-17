import { OPTIONS } from '../components/Navbar/Options';
import { getRecoil } from 'recoil-nexus';

const ages = getRecoil(OPTIONS.ages);

/**
 * EVENT PROPERTIES:
 * title (String) - translation key to use to display the title of the event
 *
 * EXACT DATES
 * start (Number) - the exact starting year (AM) of the event
 * length (Number) - the exact number of years this event lasted
 *
 * DATES RELATIVE TO OTHER EVENTS
 * NOTE: only use start or end, not both
 * relative (Object) - {
 *   id (String) - the id of the event to place this in relation to
 *   start|end (Number) - the number of years +/- to place this event relative to the other event's start|end date
 * }
 *
 * NOTES: fractions are allowed in dates, e.g., 1 month = 1/12
 */

// ages = 'best'
const events = {
  adam: {
    start: 1,
    length: 930,
  },
  seth: {
    relative: { id: 'adam', start: 230 },
    length: 912,
  },
  enosh: {
    relative: { id: 'seth', start: 205 },
    length: 905,
  },
  kenan: {
    relative: { id: 'enosh', start: 190 },
    length: 910,
  },
  mahalalel: {
    relative: { id: 'kenan', start: 170 },
    length: 895,
  },
  jared: {
    relative: { id: 'mahalalel', start: 165 },
    length: 962,
  },
  enoch: {
    relative: { id: 'jared', start: 162 },
    length: 365,
  },
  methuselah: {
    relative: { id: 'enoch', start: 165 },
    length: 365,
  },
  lamech: {
    relative: { id: 'methuselah', start: 187 },
    length: 777,
  },
  noah: {
    relative: { id: 'lamech', start: 182 },
    length: 950,
  },
  flood: {
    relative: { id: 'noah', start: 500 },
    length: 1,
  },
  shem: {
    relative: { id: 'flood', end: 2 - 100 }, // Shem was 100 years old 2 years after the flood
    length: 100 + 500,
  },
  arphaxad: {
    relative: { id: 'shem', start: 100 },
    length: 135 + 430,
  },
  kainan: {
    relative: { id: 'arphaxad', start: 135 },
    length: 130 + 330,
  },
  shelah: {
    relative: { id: 'kainan', start: 130 },
    length: 130 + 403,
  },
  eber: {
    relative: { id: 'shelah', start: 130 },
    length: 134 + 370,
  },
  peleg: {
    relative: { id: 'eber', start: 134 },
    length: 130 + 209,
  },
  reu: {
    relative: { id: 'peleg', start: 130 },
    length: 132 + 207,
  },
  serug: {
    relative: { id: 'reu', start: 132 },
    length: 130 + 200,
  },
  nahor: {
    relative: { id: 'serug', start: 130 },
    length: 79 + 129,
  },
  terah: {
    relative: { id: 'nahor', start: 79 },
    length: 130 + 75,
  },
};

// adjust dates based on user options: ages
switch (ages) {
  case 'masoretic':
    events.seth.relative.start = 130;
    events.enosh.relative.start = 105;
    events.kenan.relative.start = 90;
    events.mahalalel.relative.start = 70;
    events.jared.relative.start = 65;
    events.methuselah.relative.start = 65;
    events.lamech.length = 777;
    events.noah.relative.start = 182;
    events.arphaxad.length = 35 + 403;
    delete events.kainan;
    events.shelah = {
      relative: { id: 'arphaxad', start: 35 },
      length: 30 + 403,
    };
    events.eber.relative.start = 34 + 430;
    events.eber.length = 34 + 430;
    events.peleg.relative.start = 30 + 209;
    events.peleg.length = 30 + 209;
    events.reu.relative.start = 32 + 207;
    events.reu.length = 32 + 207;
    events.serug.relative.start = 30 + 200;
    events.serug.length = 30 + 200;
    events.nahor.relative.start = 29 + 119;
    events.nahor.length = 29 + 119;
    break;

  case 'septuagint':
  case 'best':
  default:
    events.seth.relative.start = 230;
    events.enosh.relative.start = 205;
    events.kenan.relative.start = 190;
    events.mahalalel.relative.start = 170;
    events.jared.relative.start = 165;
    events.methuselah.relative.start = 165;
    events.lamech.length = ages === 'best' ? 777 : 753;
    events.noah.relative.start = ages === 'best' ? 182 : 188;
    events.arphaxad.length = 135 + 430;
    events.kainan = {
      relative: { id: 'arphaxad', start: 135 },
      length: 130 + 330,
    };
    shelah = {
      relative: { id: 'kainan', start: 130 },
      length: 130 + (ages === 'best' ? 403 : 330),
    };
    events.eber.length = 134 + 370;
    events.peleg.length = 130 + 209;
    events.reu.length = 132 + 207;
    events.serug.length = 130 + 200;
    events.nahor.length = 79 + 129;
}

// add the names of each property to all of the entries
Object.keys(events).forEach(key => (events[key].title = `names.${key}`));

export default events;
