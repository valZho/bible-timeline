import React from 'react';

import Ruler from './Ruler';
import Events from './Events';
import './style.scss';

const Timeline = () => {
  return (
    <div className="timelineContainer">
      <Ruler />
      <Events />
    </div>
  );
};

export default Timeline;
