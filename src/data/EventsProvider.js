import React, { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { OPTIONS } from '../components/Navbar/Options';

import getEvents from './events';

// —————————————— EVENTS STATE ————————————————————————
export const EVENTS = atom({ key: 'events', default: { events: [], farRight: 0, lastDate: 1, trackCount: 1 } });
// —————————————————————————————————————————————————————

const EventsProvider = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_events, setEvents] = useRecoilState(EVENTS);
  const ages = useRecoilValue(OPTIONS.ages);
  const scale = useRecoilValue(OPTIONS.scale);
  const margins = useRecoilValue(OPTIONS.margins);
  const trackMin = useRecoilValue(OPTIONS.trackMin);

  useEffect(() => {
    const { events, farRight, lastDate, trackCount } = getEvents({
      ages,
      scale,
      margins: margins === 'on',
      trackMin,
    });
    setEvents({ events, farRight, lastDate, trackCount });
  }, [ages, scale, margins, trackMin, setEvents]);

  return <></>;
};

export default EventsProvider;
