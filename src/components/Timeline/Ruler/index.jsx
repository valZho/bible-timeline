import React from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@mantine/core';

import OPTIONS from '../../../data/state-options';
import CALENDAR from '../../../data/state-calendar';

import getDate from '../../../data/events/utils/getDate';
import './style.scss';

const Ruler = () => {
  const { t } = useTranslation();
  const ceConvert = useRecoilValue(CALENDAR.ceConvert);
  const farRight = useRecoilValue(CALENDAR.farRight);
  const scale = useRecoilValue(OPTIONS.scale);
  const calendar = useRecoilValue(OPTIONS.calendar);

  const BUFFER = 500;
  const totalYears = Math.ceil((farRight + BUFFER) / scale) + 10;

  const yearTickProps = {
    className: 'yearTick',
    strokeWidth: scale > 15 ? 4 : scale > 10 ? 3 : scale > 5 ? 2 : scale > 3 ? 1 : scale > 2 ? 4 : scale > 1 ? 3 : 2,
    strokeLinecap: 'round',
    y1: '80%',
    y2: '100%',
  };

  const labelTickProps = {
    className: 'labelTick',
    strokeWidth: scale,
    strokeLinecap: 'square',
    y1: '80%',
    y2: '100%',
  };

  // Position of tick marking START of year
  const tickPosition = yearAM => (yearAM - 1) * scale;

  // Position of label CENTERED in the year space
  const labelPosition = yearAM => (yearAM - 1) * scale + scale / 2;

  // Generate year ticks based on scale
  const yearTicks = [];
  if (scale >= 4) {
    // Full ticks every year
    for (let yearAM = 1; yearAM <= totalYears; yearAM++) {
      const x = tickPosition(yearAM);
      yearTicks.push(<line key={`year-${yearAM}`} {...yearTickProps} x1={x} x2={x} />);
    }
  } else {
    // Below scale 4: only tick every 7th year
    for (let yearAM = 7; yearAM <= totalYears; yearAM += 7) {
      const x = tickPosition(yearAM);
      yearTicks.push(<line key={`year-${yearAM}`} {...yearTickProps} x1={x} x2={x} />);
    }
  }

  // Generate label ticks and labels with appropriate density based on scale
  const labelTicks = [];
  const yearLabels = [];
  let labelInterval = 7; // base interval

  if (scale <= 2) {
    labelInterval = 56; // every 8th cycle (7*8) for very small scales
  } else if (scale < 5) {
    labelInterval = 28; // every 4th cycle (7*4)
  } else if (scale < 9) {
    labelInterval = 14; // every 2nd cycle (7*2)
  }

  for (let yearAM = labelInterval; yearAM <= totalYears; yearAM += labelInterval) {
    const x = labelPosition(yearAM);

    // Label tick - centered on the year, always shown with labels
    labelTicks.push(<line key={`label-tick-${yearAM}`} {...labelTickProps} x1={x} x2={x} />);

    // Label text
    yearLabels.push(
      <text key={`label-${yearAM}`} x={x} y="50%" textAnchor="middle" fontSize="0.8rem">
        {t(...getDate({ yearAM, need: calendar, ...ceConvert, decimals: 0, isRuler: true }).label)}
      </text>,
    );
  }

  return farRight ? (
    <div className="rulerContainer" style={{ width: farRight + BUFFER + 20 }}>
      <svg version="1.1" className="ruler" width={farRight + BUFFER} height="100%">
        {labelTicks}
        {yearTicks}
        <rect className="mask" x="0" y="0" width={scale * 0.5} height="100%" />
        <line {...yearTickProps} strokeWidth="4" x1="0" x2="0" y1="10%" />
        {yearLabels}
      </svg>
    </div>
  ) : (
    <Skeleton className="rulerContainer skeleton" width="100%" height="70px" />
  );
};

export default Ruler;
