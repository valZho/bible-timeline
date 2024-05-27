import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import OPTIONS from '../data/state-options';

import CALENDAR from './state-calendar';
import getEvents from './events';

const EventsProvider = () => {
  const [_events, setEvents] = useRecoilState(CALENDAR.events);
  const [_ceConvert, setCeConvert] = useRecoilState(CALENDAR.ceConvert);
  const [_farRight, setFarRight] = useRecoilState(CALENDAR.farRight);
  const [_trackCount, setTrackCount] = useRecoilState(CALENDAR.trackCount);
  const ages = useRecoilValue(OPTIONS.ages);
  const scale = useRecoilValue(OPTIONS.scale);
  const margins = useRecoilValue(OPTIONS.margins);
  const trackMin = useRecoilValue(OPTIONS.trackMin);
  const crucifixion = useRecoilValue(OPTIONS.crucifixion);

  useEffect(() => {
    const { events, ceConvert, farRight, trackCount } = getEvents({
      ages,
      scale,
      margins: margins === 'on',
      trackMin,
      crucifixion,
    });

    setEvents(events);
    setCeConvert(ceConvert);
    setFarRight(farRight);
    setTrackCount(trackCount);
  }, [ages, scale, margins, trackMin, crucifixion, setEvents, setCeConvert, setFarRight, setTrackCount]);

  return <></>;
};

export default EventsProvider;
