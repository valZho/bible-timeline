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
  const manuscript = useRecoilValue(OPTIONS.manuscript);
  const sojourn = useRecoilValue(OPTIONS.sojourn);
  const scale = useRecoilValue(OPTIONS.scale);
  const margins = useRecoilValue(OPTIONS.margins);
  const trackMin = useRecoilValue(OPTIONS.trackMin);
  const crucifixion = useRecoilValue(OPTIONS.crucifixion);
  const jubilee = useRecoilValue(OPTIONS.jubilee);
  const pyramids = useRecoilValue(OPTIONS.pyramids);
  const daniel69 = useRecoilValue(OPTIONS.daniel69);

  useEffect(() => {
    const { events, ceConvert, farRight, trackCount } = getEvents({
      manuscript,
      sojourn,
      scale,
      margins: margins === 'on',
      trackMin,
      crucifixion,
      jubilee,
      pyramids,
      daniel69,
    });
    setEvents(events);
    setCeConvert(ceConvert);
    setFarRight(farRight);
    setTrackCount(trackCount);
  }, [
    manuscript,
    sojourn,
    scale,
    margins,
    trackMin,
    crucifixion,
    jubilee,
    pyramids,
    daniel69,
    setEvents,
    setCeConvert,
    setFarRight,
    setTrackCount,
  ]);

  return <></>;
};

export default EventsProvider;
