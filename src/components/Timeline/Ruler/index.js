import React from 'react';
import { useRecoilValue } from 'recoil';

import { OPTIONS } from '../../Navbar/Options';
import { EVENTS } from '../../../data/EventsProvider';
import './style.scss';

const Ruler = () => {
  const { farRight } = useRecoilValue(EVENTS);
  const margins = useRecoilValue(OPTIONS.margins);
  const jubilee = useRecoilValue(OPTIONS.jubilee);
  const scale = useRecoilValue(OPTIONS.scale);

  // years to show ... add a little buffer on the right for event
  const totalYears = Math.ceil((farRight + 200) / scale) + 10;

  const ticks = [];
  for (let i = 1; i < totalYears; i++) {
    // yearly ticks: only zoomed in above a certain scale
    if (scale > 20) {
      ticks.push(<div key={`tick${i}`} className="tick normal" style={{ width: scale }}></div>);
    }

    // shmita every 7 years
    if (i % 7 === 0) {
      ticks.push(<div key={`tick${i}`} className="tick shmita" style={{ width: scale }}></div>);
    }
  }

  return (
    <div className="rulerContainer" style={{ width: farRight + 200 }}>
      {ticks}
    </div>
  );
};

export default Ruler;
