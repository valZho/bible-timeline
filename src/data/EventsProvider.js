import React, { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { OPTIONS } from '../components/Navbar/Options';

import { getBiblicalEvents } from './events';

// —————————————— EVENTS STATE ————————————————————————
export const EVENTS = atom({ key: 'events', default: { biblical: {} } });
// —————————————————————————————————————————————————————

const EventsProvider = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_events, setEvents] = useRecoilState(EVENTS);
  const ages = useRecoilValue(OPTIONS.ages);
  const margins = useRecoilValue(OPTIONS.margins);

  useEffect(() => {
    setEvents({
      biblical: getBiblicalEvents({ ages, margins }),
    });
  }, [ages, margins, setEvents]);

  return <></>;
};

export default EventsProvider;
