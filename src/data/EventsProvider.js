import React, { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { OPTIONS } from '../components/Navbar/Options';

import { getBiblicalEvents } from './events';

// —————————————— EVENTS STATE ————————————————————————
export const EVENTS = atom({ key: 'events', default: { biblical: [], secular: [], farRight: 0, lastDate: 1 } });
// —————————————————————————————————————————————————————

const EventsProvider = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_events, setEvents] = useRecoilState(EVENTS);
  const ages = useRecoilValue(OPTIONS.ages);
  const scale = useRecoilValue(OPTIONS.scale);
  const margins = useRecoilValue(OPTIONS.margins);

  useEffect(() => {
    const { events: biblical, farRight, lastDate } = getBiblicalEvents({ ages, scale, margins: margins === 'on' });
    setEvents({ biblical, farRight, lastDate });
  }, [ages, scale, margins, setEvents]);

  return <></>;
};

export default EventsProvider;
