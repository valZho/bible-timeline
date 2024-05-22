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
    return biblical.map((e, i) => {
      return (
        <div
          className={`eventWrapper ${e.color ?? ''} track${e.display.track}`}
          key={e.key}
          style={{
            left: e.display.left,
            width: e.display.fullWidth, // add 2 pixels for borders
          }}
        >
          <div className={`bar ${e.color || ''}`}>
            <div className="margin" style={{ width: e.display.marginStart }} />
            <div className="event" style={{ maxWidth: e.display.width }}>
              <div className="margin" style={{ minWidth: e.display.marginStart }} />
              <div className="margin" style={{ width: e.display.marginEnd }} />
            </div>
            <div className="margin" style={{ width: e.display.marginEnd }} />
          </div>
          <div className="labels">
            <div className="start">
              <span className="title">{t(e.title)}</span>
              {t('timeline.textSeparator')}
              {t(`timeline.${margins && e.marginStart ? 'date_wMargin' : 'date'}`, {
                year: e.startAm,
                era: t('timeline.am'),
                count: e.marginStart,
              })}
              {t('timeline.textSeparator')}
              {t('timeline.year', { count: e.years })}
            </div>
            <div className="end">
              {t(`timeline.${margins && e.marginEnd ? 'date_wMargin' : 'date'}`, {
                year: e.endAm,
                era: t('timeline.am'),
                count: e.marginEnd,
              })}
            </div>
          </div>
          <div className="flagStart" />
          <div className="flagEnd" />
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
