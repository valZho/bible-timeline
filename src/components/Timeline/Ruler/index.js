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

  let ticks = [];

  // NORMAL TICK VALUES:
  // scale < 5
  // hidden

  // // scale > 4
  // let scaledProps = {
  //   className="tick normal"
  //   width="2"
  //   x=""
  // }

  // // generate all the tick vars before messing with (slow) jsx
  // const tickData = Array(totalYears).fill(0).map((_, i) => {

  // })

  // const ticks = Array(totalYears)
  //   .fill(0)
  //   .map((_, i) => {
  //     const x = i * scale;
  //     return (
  //       <>
  //         <rect width="2" height="30%" y="70%" className={`tick yr${i + 1}`} x={x} />
  //         <text x={x} y="60%" textAnchor="left" fontSize=".8rem">
  //           {i + 1}
  //         </text>
  //       </>
  //     );
  //   });

  const normalTicks = scale > 8 ? <rect x="0" y="0" width="100%" height="100%" fill="url(#NormalTicks)" /> : '';

  return (
    <div className="rulerContainer" style={{ width: farRight + 200 }}>
      <svg version="1.1" className={`ruler scale${scale}`} width="100%" height="100%">
        <defs>
          <linearGradient id="SchmitaGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="lightgreen" stopOpacity="1" />
            <stop offset="100%" stopColor="lightgreen" stopOpacity="0" />
          </linearGradient>
          <pattern id="NormalTicks" x="0" y="0" width={scale} height="100%" patternUnits="userSpaceOnUse">
            <rect className="tickMark" x="0" y="80%" width="2" height="20%" fill="black" />
          </pattern>
          <pattern id="ShmitaTicks" x="0" y="0" width={scale * 7} height="100%" patternUnits="userSpaceOnUse">
            <rect className="shmita" x={scale * 6} y="60%" width={scale} height="40%" fill="url(#SchmitaGradient)" />
            <rect className="tickMark" x={scale * 6} y="60%" width="2" height="40%" fill="black" />
          </pattern>
        </defs>
        {normalTicks}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#ShmitaTicks)" />
      </svg>
    </div>
  );
};

export default Ruler;
