import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const optionsState = {
  panels: atom({
    key: 'optionsPanels',
    default: [],
    effects_UNSTABLE: [persistAtom],
  }),

  scale: atom({
    key: 'optionsScale',
    default: 10,
    effects_UNSTABLE: [persistAtom],
  }),

  ages: atom({
    key: 'optionsAges',
    default: 'best',
    effects_UNSTABLE: [persistAtom],
  }),

  margins: atom({
    key: 'optionsMargins',
    default: '',
    effects_UNSTABLE: [persistAtom],
  }),

  jubilee: atom({
    key: 'optionsJubilee',
    default: 'exclusive',
    effects_UNSTABLE: [persistAtom],
  }),

  trackMin: atom({
    key: 'optionsTrackMin',
    default: '20',
    effects_UNSTABLE: [persistAtom],
  }),

  calendar: atom({
    key: 'optionsCalendar',
    default: 'am',
    effects_UNSTABLE: [persistAtom],
  }),

  crucifixion: atom({
    key: 'optionsCrucifixion',
    default: 30,
    effects_UNSTABLE: [persistAtom],
  }),
};

export default optionsState;
