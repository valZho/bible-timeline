import { atom } from 'recoil';

const eventsState = {
  events: atom({ key: 'eventsEvents', default: [] }),
  ceConvert: atom({ key: 'eventsCeShift', default: { shift: 0, push: 'bc' } }),
  farRight: atom({ key: 'eventsFarRight', default: 0 }),
  trackCount: atom({ key: 'eventsTrackCount', default: 0 }),
};

export default eventsState;
