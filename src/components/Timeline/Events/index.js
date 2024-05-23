import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { OPTIONS } from '../../Navbar/Options';
import { EVENTS } from '../../../data/EventsProvider';

import './style.scss';

const Events = () => {
  const { t } = useTranslation();
  const { biblical, farRight } = useRecoilValue(EVENTS);
  const margins = useRecoilValue(OPTIONS.margins);

  const createEvents = useCallback(() => {
    console.log(biblical);

    const bar = ({ color, marginStart, width, fullWidth, marginEnd }, key) => (
      <svg className={`bar ${color || ''}`} version="1.1" width={fullWidth} height="10">
        <defs>
          <linearGradient id="shadow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="30%" stopColor="black" stopOpacity="0" />
            <stop offset="70%" stopColor="black" stopOpacity="0.3" />
            <stop offset="100%" stopColor="black" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="highlight" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="30%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient" x1="0" x2=".7" y1="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect className="base" width="100%" height="100%" fill="blue" />
        <rect className="margin" width={marginStart * 2} height="100%" fill="lightblue" />
        <rect className="margin" width={marginEnd * 2} x={fullWidth - marginEnd * 2} height="100%" fill="lightblue" />
        <rect className="start" width={marginStart ? 1 : 0} height="100%" x={marginStart} fill="black" />
        <rect className="end" width={marginEnd ? 1 : 0} height="100%" x={marginStart + width} fill="black" />
        <rect width="100%" height="100%" fill="url(#gradient)" />
        <rect width="100%" height="100%" fill="url(#shadow)" />
        <rect width="100%" height="100%" fill="url(#highlight)" />
      </svg>
    );

    const labels = ({ title, marginStart, startAm, years, marginEnd, endAm }) => (
      <div className="labels">
        <div className="start">
          <span className="title">{t(title)}</span>
          {t('timeline.textSeparator')}
          {t(`timeline.${margins && marginStart ? 'date_wMargin' : 'date'}`, {
            year: startAm,
            era: t('timeline.am'),
            count: marginStart,
          })}
          {t('timeline.textSeparator')}
          {t('timeline.year', { count: years })}
        </div>
        <div className="end">
          {t(`timeline.${margins && marginEnd ? 'date_wMargin' : 'date'}`, {
            year: endAm,
            era: t('timeline.am'),
            count: marginEnd,
          })}
        </div>
      </div>
    );

    return biblical.map(e => {
      return (
        <div
          className={`eventWrapper ${e.color ?? ''} track${e.display.track}`}
          key={e.key}
          style={{
            left: e.display.left,
            width: e.display.fullWidth, // add 2 pixels for borders
          }}
        >
          {bar(e.display, e.key)}
          {labels(e)}
          <div className="flag" style={{ left: e.display.marginStart }} />
          <div className="flag" style={{ left: e.display.marginEnd + e.display.width }} />
        </div>
      );
    });
  }, [biblical, margins, t]);

  return (
    <div className="eventsContainer" style={{ width: farRight + 200 }}>
      {createEvents()}
    </div>
  );
};

export default Events;
