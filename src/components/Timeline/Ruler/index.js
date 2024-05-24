import React from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@mantine/core';

import { OPTIONS } from '../../Navbar/Options';
import { EVENTS } from '../../../data/EventsProvider';
import './style.scss';

const Ruler = () => {
  const { t } = useTranslation();
  const { farRight } = useRecoilValue(EVENTS);
  const jubilee = useRecoilValue(OPTIONS.jubilee);
  const scale = useRecoilValue(OPTIONS.scale);

  // years to show ... add a little buffer on the right for event
  const totalYears = Math.ceil((farRight + 200) / scale) + 10;

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

  const jubileeLabels = Array(Math.ceil(totalYears / cycle))
    .fill(0)
    .map((_, i) => {
      const year = (i + 1) * cycle + dateOffset;
      // if the scale is too low, then remove every other label to avoid overlaps
      if (i % 2 && scale < 2) return '';
      return (
        <text key={`jText${year}`} x={placeText(year)} y="25%" textAnchor="middle" fontSize="0.8rem" fontWeight="bold">
          {t('timeline.date', { year, era: t('timeline.am') })}
        </text>
      );
    });

  let intercalation = 0;
  const shmitaLabels =
    scale < 10
      ? ''
      : Array(Math.ceil(totalYears / 7))
          .fill(0)
          .map((_, i) => {
            // do stuff every 7th year
            if (!((i + 1) % 7)) {
              if (jubilee === 'intercalated') intercalation++;
              // skip labels next to jubilees to avoid collision
              return '';
            }
            const year = (i + 1) * 7 + intercalation;
            return (
              <text key={`sText${year}`} x={placeText(year)} y="45%" textAnchor="middle" fontSize="0.7rem">
                {t('timeline.date', { year, era: t('timeline.am') })}
              </text>
            );
          });

  return farRight ? (
    <div className="rulerContainer" style={{ width: farRight + 200 + 20 }}>
      <svg version="1.1" className="ruler" width={farRight + 200} height="100%">
        <defs>
          <pattern id="YearMarks" x="0" y="0" width={scale} height="100%" patternUnits="userSpaceOnUse">
            {scale < 6 ? '' : <line {...yearTickProps} />}
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
        <line {...yearTickProps} y1="2%" />
        {shmitaLabels}
        {jubileeLabels}
      </svg>
    </div>
  ) : (
    <Skeleton width="100%" height="70px" />
  );
};

export default Ruler;
