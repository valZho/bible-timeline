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
  const jubilee = useRecoilValue(OPTIONS.jubilee);
  const scale = useRecoilValue(OPTIONS.scale);
  const calendar = useRecoilValue(OPTIONS.calendar);

  const BUFFER = 500;

  // years to show ... add a little buffer on the right for event
  const totalYears = Math.ceil((farRight + BUFFER) / scale) + 10;

  const yearTickProps = {
    id: 'Year',
    className: 'yearTick',
    strokeWidth: scale > 10 ? 4 : 2,
    strokeLinecap: 'round',
    x1: 0,
    x2: 0,
    y1: '80%',
    y2: '100%',
  };

  const shmitaTickProps = {
    id: 'Shmita',
    className: 'shmitaTick',
    strokeWidth: scale,
    strokeLinecap: 'round',
    y1: `${60 + scale}%`,
    y2: '100%',
  };

  const jubileeTickProps = {
    id: 'Jubilee',
    className: 'jubileeTick',
    strokeWidth: scale,
    strokeLinecap: 'round',
    y1: `${40 + scale}%`,
    y2: '100%',
  };

  const shmitas = Array(7)
    .fill(0)
    .map((_, i) => {
      const x = scale * 7 * (i + 1) - scale / 2;
      return <line key={`shmita${x}`} {...shmitaTickProps} x1={x} x2={x} />;
    });

  let cycle, jX, dateOffset;
  switch (jubilee) {
    case 'intercalated':
      cycle = 50;
      jX = scale * 50 - scale / 2;
      dateOffset = 0;
      break;
    case 'inclusive':
      cycle = 49;
      jX = scale * 49 - scale / 2;
      dateOffset = 0;
      break;
    case 'exclusive':
    default:
      cycle = 49;
      jX = scale / 2;
      dateOffset = 1;
  }

  const placeText = year => year * scale - scale / 2;

  const jubileeLabels = Array(Math.ceil(totalYears / cycle) || 0)
    .fill(0)
    .map((_, i) => {
      const yearAM = (i + 1) * cycle + dateOffset;
      // if the scale is too low, then remove every other label to avoid overlaps
      if (i % 2 && scale < 2) return '';
      return (
        <text
          key={`jText${yearAM}`}
          x={placeText(yearAM)}
          y="25%"
          textAnchor="middle"
          fontSize="0.8rem"
          fontWeight="bold"
        >
          {t(...getDate({ yearAM, need: calendar, ...ceConvert }).label)}
        </text>
      );
    });

  let intercalation = 0;
  let shmitaLabels = '';
  if (scale > 9) {
    shmitaLabels = Array(Math.ceil(totalYears / 7))
      .fill(0)
      .map((_, i) => {
        // do stuff every 7th year
        if (!((i + 1) % 7)) {
          // skip labels next to jubilees to avoid collision
          if (jubilee === 'intercalated') intercalation++;
          // eslint-disable-next-line prettier/prettier
          return '';
        }
        const yearAM = (i + 1) * 7 + intercalation;
        return (
          <text key={`sText${yearAM}`} x={placeText(yearAM)} y="45%" textAnchor="middle" fontSize="0.7rem">
            {t(...getDate({ yearAM, need: calendar, ...ceConvert }).label)}
          </text>
        );
      });
  }

  return farRight ? (
    <div className="rulerContainer" style={{ width: farRight + BUFFER + 20 }}>
      <svg version="1.1" className="ruler" width={farRight + BUFFER} height="100%">
        <defs>
          <pattern id="YearMarks" x="0" y="0" width={scale} height="100%" patternUnits="userSpaceOnUse">
            {scale < 4 ? '' : <line {...yearTickProps} />}
          </pattern>
          <pattern id="ShmitaMarks" x="0" y="0" width={scale * 7} height="100%" patternUnits="userSpaceOnUse">
            {shmitas}
          </pattern>
          <pattern id="Cycle" x="0" y="0" width={scale * cycle} height="100%" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width={scale * 49} height="100%" fill="url(#ShmitaMarks)" />
            <line {...jubileeTickProps} x1={jX} x2={jX} />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Cycle)" />
        <rect className="mask" x="0" y="0" width={scale * 1.5} height="100%" fill="white" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#YearMarks)" />
        <line {...yearTickProps} strokeWidth="4" x1="2" x2="2" y1="10%" />
        {shmitaLabels}
        {jubileeLabels}
      </svg>
    </div>
  ) : (
    <Skeleton className="rulerContainer skeleton" width="100%" height="70px" />
  );
};

export default Ruler;
