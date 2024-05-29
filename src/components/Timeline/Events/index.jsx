import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { HoverCard, LoadingOverlay, Text } from '@mantine/core';

import OPTIONS from '@/data/state-options';
import CALENDAR from '@/data/state-calendar';
import BibleLink from '@/components/BibleLink';
import getDate from '@/data/events/utils/getDate';

import './style.scss';

const Events = () => {
  const { t } = useTranslation();
  const events = useRecoilValue(CALENDAR.events);
  const ceConvert = useRecoilValue(CALENDAR.ceConvert);
  const farRight = useRecoilValue(CALENDAR.farRight);
  const trackCount = useRecoilValue(CALENDAR.trackCount);
  const margins = useRecoilValue(OPTIONS.margins);
  const calendar = useRecoilValue(OPTIONS.calendar);

  const trackHeight = 28;
  const flagHeight = (trackCount + 2) * trackHeight;

  const createEvents = useCallback(() => {
    const bar = ({ color, marginStart, width, fullWidth, marginEnd }, key) => (
      <svg key={key} className="bar" version="1.1" width={fullWidth} height="10">
        <rect className={`base ${color || ''}`} width="100%" height="100%" fill="blue" />
        <rect className="margin" width={marginStart * 2} height="100%" fill="lightblue" />
        <rect className="margin" width={marginEnd * 2} x={fullWidth - marginEnd * 2} height="100%" fill="lightblue" />
        <rect className="start" width={marginStart ? 1 : 0} height="100%" x={marginStart} fill="black" />
        <rect className="end" width={marginEnd ? 1 : 0} height="100%" x={marginStart + width} fill="black" />
      </svg>
    );

    const labels = ({
      key,
      marginStart,
      startAM,
      startCE,
      years,
      marginEnd,
      endAM,
      endCE,
      display: { hideEndDate },
    }) => {
      let startLabel = t(
        ...getDate({
          yearAM: startAM,
          yearCE: startCE,
          need: calendar,
          ...ceConvert,
        }).label,
      );
      let endLabel = t(
        ...getDate({
          yearAM: endAM,
          yearCE: endCE,
          need: calendar,
          ...ceConvert,
        }).label,
      );

      if (margins) {
        startLabel = marginStart ? t(`timeline.date_wMargin`, { date: startLabel, count: marginStart }) : startLabel;
        endLabel = marginEnd ? t(`timeline.date_wMargin`, { date: endLabel, count: marginEnd }) : endLabel;
      }

      return (
        <div className="labels">
          <div className="start">
            <span className="title">{t(`events.${key}.title`)}</span>
            {t('timeline.textSeparator')}
            {startLabel}
            {years !== 0 && t('timeline.textSeparator')}
            {years !== 0 && <i>{t('timeline.year', { count: years })}</i>}
          </div>
          {!hideEndDate && <div className="end">{endLabel}</div>}
        </div>
      );
    };

    return events?.map(e => {
      const source = t(`events.${e.key}.source`);
      return (
        <HoverCard
          key={e.key}
          shadow="md"
          offset={-12}
          size="xs"
          position="bottom-start"
          closeDelay={100}
          disabled={!source}
          withinPortal={false}
          withArrow
          arrowSize={10}
          arrowPosition="side"
        >
          <HoverCard.Target>
            <div
              className={`eventWrapper ${e.color ?? ''} track${e.display.track}`}
              style={{
                top: e.display.track * trackHeight,
                left: e.display.left,
                width: e.display.fullWidth, // add 2 pixels for borders
              }}
            >
              {bar(e.display, e.key)}
              {labels(e)}
              <div className="flag" style={{ height: flagHeight, left: e.display.marginStart }} />
              <div className="flag" style={{ height: flagHeight, right: e.display.marginEnd - 1 }} />
            </div>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text className="sourceContent" size="xs">
              <strong>{t('timeline.source', { manuscript: 'Septuagint' })}</strong>{' '}
              <BibleLink bibleRef={t(`events.${e.key}.source`)} />
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      );
    });
  }, [events, calendar, margins, flagHeight, t]);

  return events.length ? (
    <div className="eventsContainer" style={{ width: farRight + 200, height: trackHeight * (trackCount + 1) }}>
      {createEvents()}
    </div>
  ) : (
    <LoadingOverlay
      visible="true"
      loaderProps={{ size: 100, type: 'bars' }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Events;
