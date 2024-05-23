import React from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

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
      return <line {...shmitaTickProps} x1={x} x2={x} />;
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
      return (
        <text x={placeText(year)} y="30%" textAnchor="middle" fontSize="0.7rem" fontWeight="bold">
          {t('timeline.date', { year, era: t('timeline.am') })}
        </text>
      );
    });

  const shmitaLabels =
    scale < 12
      ? ''
      : Array(Math.ceil(totalYears / 7))
          .fill(0)
          .map((_, i) => {
            const year = (i + 1) * 7 + dateOffset;
            return (
              <text x={placeText(year)} y="40%" textAnchor="middle" fontSize="0.6rem">
                {t('timeline.date', { year, era: t('timeline.am') })}
              </text>
            );
          });

  return (
    <div className="rulerContainer" style={{ width: farRight + 200 }}>
      <svg version="1.1" className="ruler" width="100%" height="100%">
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
        {jubileeLabels}
      </svg>
    </div>
  );
};

export default Ruler;
