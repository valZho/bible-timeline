import React, { useRef } from 'react';
import { ScrollArea } from '@mantine/core';

import Ruler from './Ruler';
import Events from './Events';
import EventPicker from './EventPicker';
import './style.scss';

const Timeline = () => {
  const viewport = useRef(null);

  const scrollBuffer = 40;
  const scrollTo = (left, track) => {
    viewport.current.scrollTo({
      left: left - scrollBuffer,
      top: track * 60 - scrollBuffer,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollArea className="timelineContainer" type="always" offsetScrollbars="false" viewportRef={viewport}>
      <Ruler />
      <Events />
      <EventPicker scrollTo={scrollTo} />
    </ScrollArea>
  );
};

export default Timeline;
