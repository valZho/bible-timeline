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
  const pyramids = useRecoilValue(OPTIONS.pyramids);
  const exileStart = useRecoilValue(OPTIONS.exileStart);
  const decree = useRecoilValue(OPTIONS.decree);
  const daniel69 = useRecoilValue(OPTIONS.daniel69);
  const jubilee = useRecoilValue(OPTIONS.jubilee);
  const birthYear = useRecoilValue(OPTIONS.birthYear);
  const ministryLength = useRecoilValue(OPTIONS.ministryLength);
  const crucifixion = useRecoilValue(OPTIONS.crucifixion);

  useEffect(() => {
    const { events, ceConvert, farRight, trackCount } = getEvents({
      manuscript,
      sojourn,
      scale,
      margins: margins === 'on',
      trackMin,
      pyramids,
      exileStart,
      decree,
      daniel69,
      jubilee,
      birthYear,
      ministryLength,
      crucifixion,
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
    pyramids,
    exileStart,
    decree,
    daniel69,
    jubilee,
    birthYear,
    ministryLength,
    crucifixion,
    setEvents,
    setCeConvert,
    setFarRight,
    setTrackCount,
  ]);

  return <></>;
};

export default EventsProvider;
