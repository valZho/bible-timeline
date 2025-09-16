import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const optionsState = {
  // CALCULATION OPTIONS
  manuscript: atom({
    key: 'optionsManuscript',
    default: 'best',
    effects_UNSTABLE: [persistAtom],
  }),
  sojourn: atom({
    key: 'optionsSojourn',
    default: 'early',
    effects_UNSTABLE: [persistAtom],
  }),
  exileStart: atom({
    key: 'optionsExileStart',
    default: 'deportation',
    effects_UNSTABLE: [persistAtom],
  }),
  decree: atom({
    key: 'optionsDecree',
    default: 'nehmiah',
    effects_UNSTABLE: [persistAtom],
  }),
  jubilee: atom({
    key: 'optionsJubilee',
    default: 'inclusive',
    effects_UNSTABLE: [persistAtom],
  }),
  daniel69: atom({
    key: 'optionsDaniel69',
    default: 'baptism',
    effects_UNSTABLE: [persistAtom],
  }),
  birthYear: atom({
    key: 'optionsBirthYear',
    default: -3,
    effects_UNSTABLE: [persistAtom],
  }),
  ministryLength: atom({
    key: 'optionsMinistryLength',
    default: 'three',
    effects_UNSTABLE: [persistAtom],
  }),
  crucifixion: atom({
    key: 'optionsCrucifixion',
    default: 31,
    effects_UNSTABLE: [persistAtom],
  }),
  pyramids: atom({
    key: 'optionsPyramids',
    default: 'revised',
    effects_UNSTABLE: [persistAtom],
  }),

  // DISPLAY OPTIONS
  margins: atom({
    key: 'optionsMargins',
    default: '',
    effects_UNSTABLE: [persistAtom],
  }),
  scale: atom({
    key: 'optionsScale',
    default: 10,
    effects_UNSTABLE: [persistAtom],
  }),
  trackMin: atom({
    key: 'optionsTrackMin',
    default: 'auto',
    effects_UNSTABLE: [persistAtom],
  }),
  showSource: atom({
    key: 'optionsShowSource',
    default: false,
    effects_UNSTABLE: [persistAtom],
  }),

  calendar: atom({
    key: 'optionsCalendar',
    default: 'am',
    effects_UNSTABLE: [persistAtom],
  }),

  // INTERFACE STATE
  panels: atom({
    key: 'optionsPanels',
    default: [],
    effects_UNSTABLE: [persistAtom],
  }),
  notes: atom({
    key: 'optionsNotes',
    default: [],
    effects_UNSTABLE: [persistAtom],
  }),
};

export default optionsState;
