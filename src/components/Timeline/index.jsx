import React, { useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import { ScrollArea } from '@mantine/core';

import Ruler from './Ruler';
import Events from './Events';
import EventPicker from './EventPicker';
import './style.scss';

const Timeline = () => {
  const [{ width }, setVeiwportSize] = useState({ width: 0 });
  const viewport = useRef(null);
  useResizeObserver(viewport, el => setVeiwportSize(el.contentRect));

  // with the resize observer we can try to scroll items into the middle of the viewport
  const trackHeight = 45;
  const topMargin = 50;
  const scrollTo = (eventLeftSide, track) => {
    viewport.current.scrollTo({
      left: eventLeftSide - width / 4,
      top: (track - 3) * trackHeight + topMargin,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollArea className="timelineContainer" type="always" offsetScrollbars="false" viewportRef={viewport}>
      <Ruler />
      <Events trackHeight={trackHeight} />
      <EventPicker scrollTo={scrollTo} />
    </ScrollArea>
  );
};

export default Timeline;
