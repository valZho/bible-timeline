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
  const events = useRecoilValue(CALENDAR.events);

  const scale = useRecoilValue(OPTIONS.scale);
  const calendar = useRecoilValue(OPTIONS.calendar);
  const shmita = useRecoilValue(OPTIONS.shmita);
  const shmitaReset = useRecoilValue(OPTIONS.shmitaReset);
  const jubileeOverlap = useRecoilValue(OPTIONS.jubileeOverlap);

  const BUFFER = 500;
  const totalYears = Math.ceil((farRight + BUFFER) / scale) + 10;

  const yearTickProps = {
    className: 'yearTick',
    strokeWidth: scale > 15 ? 4 : scale > 10 ? 3 : scale > 5 ? 2 : scale > 3 ? 1 : scale > 2 ? 4 : scale > 1 ? 3 : 2,
    strokeLinecap: 'square',
    y1: '80%',
    y2: '100%',
  };

  const yearLabelProps = {
    className: 'yearLabel',
    y: '20%',
    textAnchor: 'middle',
    fontSize: '0.8rem',
  };

  // height of highlight as a percentage has to adjust relative to scale
  // otherwise the y1 doesn't align with the top of the stroke of the tick
  const scaleFactor = (21 - scale) * 0.8;
  const yearHighlightProps = {
    className: 'labelHighlight',
    strokeWidth: scale,
    strokeLinecap: 'square',
    y1: `${100 - 54 - scaleFactor}%`,
    y2: '100%',
  };

  const shmitaHighlightProps = {
    className: 'shmitaHighlight',
    strokeWidth: scale,
    strokeLinecap: 'round',
    y1: `${100 - 25 - scaleFactor}%`,
    y2: '100%',
  };

  const jubileeHighlightProps = {
    className: 'jubileeHighlight',
    strokeWidth: scale,
    strokeLinecap: 'round',
    y1: `${100 - 45 - scaleFactor}%`,
    y2: '100%',
  };

  // Position of tick marking START of year
  const tickPosition = yearAM => (yearAM - 1) * scale;

  // Position of label CENTERED in the year space
  const labelPosition = yearAM => (yearAM - 1) * scale + scale / 2;

  // BASE YEAR TICKS
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
  const yearHighlights = [];
  const jubileeHighlights = [];
  const shmitaHighlights = [];
  const yearLabels = [];

  // add labels for every 7th year at large scales, but have to skip years
  // to avoid overlap as the scale shrinks
  let labelInterval = 7;
  if (scale === 1) {
    labelInterval = 14 * 7;
  } else if (scale === 2) {
    labelInterval = 7 * 7;
  } else if (scale < 5) {
    labelInterval = 4 * 7;
  } else if (scale < 9) {
    labelInterval = 2 * 7;
  }

  // BASE YEAR HIGHLIGHTS
  // color every 7th year for visual ease of navigation,
  // but at scale 3 or lower, tick marks don't happen every year so colorization unnecessary
  if (scale > 3) {
    for (let yearAM = 7; yearAM <= totalYears; yearAM += 7) {
      const x = labelPosition(yearAM);
      yearHighlights.push(<line key={`label-tick-${yearAM}`} {...yearHighlightProps} x1={x} x2={x} />);
    }
  }

  // SHMITA YEAR HIGHLIGHTS
  let startShmita = 7;
  switch (shmita) {
    case 'creation':
      startShmita = 7;
      break;
    case 'exodus':
      // plus 7 ... year 1 of cycle is the first AFTER exodus completes
      startShmita = Math.floor(events.find(evt => evt.key === 'exodus')?.startAM ?? 0) + 7;
      break;
    case 'entry':
      // plus 7 ... year 1 of cycle is the first AFTER exodus completes
      startShmita = Math.floor(events.find(evt => evt.key === 'conquering')?.startAM ?? 0) + 7;
      break;
    case 'conquest':
      // plus 7 ... year 1 of cycle is the first AFTER exodus completes
      startShmita = Math.floor(events.find(evt => evt.key === 'conquering')?.endAM ?? 0) + 7;
      break;
  }

  // if shmita reset, then we only process shmita up to the exile
  // otherwise process all the way through to the end
  const exile = events.find(evt => evt.key === 'exile') ?? {};
  const stopYear = shmitaReset ? Math.floor(exile.startAM || 0) : totalYears;
  const jubileePush = jubileeOverlap ? 0 : 1;
  for (let yearAM = startShmita; yearAM <= stopYear; yearAM += 7) {
    const x = labelPosition(yearAM);
    shmitaHighlights.push(<line key={`label-tick-${yearAM}`} {...shmitaHighlightProps} x1={x} x2={x} />);
  }
  for (let yearAM = startShmita + 42 + jubileePush; yearAM <= stopYear; yearAM += 49) {
    const x = labelPosition(yearAM);
    jubileeHighlights.push(<line key={`label-tick-${yearAM}`} {...jubileeHighlightProps} x1={x} x2={x} />);
  }

  // if shmita reset, then restart count after the exile
  if (shmitaReset) {
    for (let yearAM = Math.floor(exile.endAM || 0) + 7; yearAM <= totalYears; yearAM += 7) {
      const x = labelPosition(yearAM);
      shmitaHighlights.push(<line key={`label-tick-${yearAM}`} {...shmitaHighlightProps} x1={x} x2={x} />);
    }
    for (let yearAM = Math.floor(exile.endAM || 0) + 42 + jubileePush; yearAM <= totalYears; yearAM += 49) {
      const x = labelPosition(yearAM);
      jubileeHighlights.push(<line key={`label-tick-${yearAM}`} {...jubileeHighlightProps} x1={x} x2={x} />);
    }
  }

  // BASE YEAR LABELS
  for (let yearAM = labelInterval; yearAM <= totalYears; yearAM += labelInterval) {
    const x = labelPosition(yearAM);
    yearLabels.push(
      <text key={`label-${yearAM}`} x={x} {...yearLabelProps}>
        {t(...getDate({ yearAM, need: calendar, ...ceConvert, decimals: 0, isRuler: true }).label)}
      </text>,
    );
  }

  return farRight ? (
    <div className="rulerContainer" style={{ width: farRight + BUFFER + 20 }}>
      <svg version="1.1" className="ruler" width={farRight + BUFFER} height="100%">
        {yearHighlights}
        {shmitaHighlights}
        {jubileeHighlights}
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
