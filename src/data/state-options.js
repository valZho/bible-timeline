import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const STATE = {};

const scaleMax = 20;

export const calendarOptions = [
  { id: 'manuscript', type: 'select', default: 'best', values: ['best', 'septuagint', 'masoretic'] },
  { id: 'shmita', type: 'select', default: 'entry', values: ['creation', 'exodus', 'entry', 'conquest'] },
  { id: 'shmitaReset', type: 'boolean', default: false },
  { id: 'jubileeOverlap', type: 'boolean', default: false },
  { id: 'pyramids', type: 'select', default: 'revised', values: ['mainstream', 'revised'] },
  { id: 'sojourn', type: 'select', default: 'early', values: ['early', 'late'] },
  { id: 'exileStart', type: 'select', default: 'deportation', values: ['deportation', 'temple'] },
  { id: 'decree', type: 'select', default: 'nehemiah', values: ['cyrus', 'darius', 'ezra', 'nehemiah'] },
  { id: 'persia', type: 'select', default: 'revised', values: ['mainstream', 'revised'] },
  { id: 'daniel69', type: 'select', default: 'baptism', values: ['birth', 'baptism', 'death'] },
  { id: 'birthYear', type: 'slider', default: -3, range: [-9, -1, 1], values: [-9, -7, -5, -3, -1] },
  { id: 'ministryLength', type: 'select', default: 'three', values: ['two', 'three'] },
  { id: 'crucifixion', type: 'slider', default: 31, range: [26, 36, 1], values: [26, 31, 36] },
];

export const displayOptions = [
  { id: 'margins', type: 'select', default: 'hide', values: ['hide', 'show'] },
  {
    id: 'scale',
    type: 'slider',
    default: 10,
    range: [1, scaleMax, 1],
    values: [1, scaleMax * 0.25, scaleMax * 0.5, scaleMax * 0.75, scaleMax],
  },
  {
    id: 'trackMin',
    type: 'select',
    default: 'auto',
    values: ['auto', '10', '20', 'all'],
  },
  { id: 'showSource', type: 'boolean', default: false },
];

const interfaceStates = [
  { id: 'calendar', default: 'am' },
  { id: 'panels', default: [] },
  { id: 'notes', default: [] },
];

const packageOptions = options => {
  options.forEach(opt => {
    STATE[opt.id] = atom({
      key: `options_${opt.id}`,
      default: opt.default,
      effects_UNSTABLE: [persistAtom],
    });
  });
};

packageOptions(calendarOptions);
packageOptions(displayOptions);
packageOptions(interfaceStates);

export default STATE;
