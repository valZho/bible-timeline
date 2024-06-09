'use client';

import React, { useRef } from 'react';
// import useResizeObserver from '@react-hook/resize-observer';
import { ScrollArea } from '@mantine/core';

import Ruler from './Ruler';
import Events from './Events';
import EventPicker from './EventPicker';
import './style.scss';

// import dynamic from 'next/dynamic';
// const useResizeObserver = dynamic(() => import('@react-hook/resize-observer'), {
//   ssr: false,
// });

const Timeline = () => {
  const viewport = useRef(null);

  const trackHeight = 45;
  const topMargin = 50;
  const scrollTo = (eventLeftSide, track) => {
    viewport.current.scrollTo({
      left: eventLeftSide - viewport.current.offsetWidth / 4,
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
