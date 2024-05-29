import React, { useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';
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
  const showSource = useRecoilValue(OPTIONS.showSource);
  const calendar = useRecoilValue(OPTIONS.calendar);

  const trackHeight = 40;
  const flagHeight = (trackCount + 2) * trackHeight;

  const createEvents = useCallback(() => {
    const bar = ({ fuzzy, color, marginStart, width, fullWidth, marginEnd }, key) => (
      <svg key={key} className={`bar ${fuzzy ? 'fuzzy' : ''}`} version="1.1" width={fullWidth} height="10">
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
      display: { hideEndDate, fuzzy },
    }) => {
      let startLabel = t(
        ...getDate({
          yearAM: startAM,
          yearCE: startCE,
          need: calendar,
          ...ceConvert,
          fuzzy,
        }).label,
      );
      let endLabel = t(
        ...getDate({
          yearAM: endAM,
          yearCE: endCE,
          need: calendar,
          ...ceConvert,
          fuzzy,
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
            {years !== 0 && <i>{t(`timeline.year${fuzzy ? 'Fuzzy' : ''}`, { count: years })}</i>}
          </div>
          {!hideEndDate && <div className="end">{endLabel}</div>}
        </div>
      );
    };

    const eventWrapper = e => (
      <div
        className={`eventWrapper ${e.color ?? ''} track${e.display.track} ${e.display.fuzzy ? 'fuzzy' : ''}`}
        style={{
          top: e.display.track * trackHeight,
          left: e.display.left,
          width: e.display.fullWidth, // add 2 pixels for borders
        }}
      >
        {e.display.fuzzy && <div className="fuzzyCap start" />}
        {e.display.fuzzy && <div className="fuzzyCap end" />}
        {bar(e.display, e.key)}
        {labels(e)}
        {!e.display.fuzzy && <div className="flag" style={{ height: flagHeight, left: e.display.marginStart }} />}
        {!e.display.fuzzy && <div className="flag" style={{ height: flagHeight, right: e.display.marginEnd - 1 }} />}
      </div>
    );

    const eventWrapperWithSource = e => {
      const source = t(`events.${e.key}.source`);
      let placement = t(`events.${e.key}.placement`);
      if (!placement && e.relative) {
        placement = (
          <Trans
            i18nKey={`timeline.relative${typeof e.relative.start === 'number' ? 'Start' : 'End'}_wTags`}
            values={{
              count: e.relative.start ?? e.relative.end,
              id: e.relative.id,
            }}
            components={[<span className="id" />]}
          />
        );
      }
      return (
        <HoverCard
          key={e.key}
          shadow="md"
          offset={-12}
          size="xs"
          position="bottom-start"
          closeDelay={100}
          disabled={!source && !placement}
          withinPortal={false}
          withArrow
          arrowSize={10}
          arrowPosition="side"
        >
          <HoverCard.Target>{eventWrapper(e)}</HoverCard.Target>
          <HoverCard.Dropdown>
            {placement && (
              <Text className="placementContent" size="xs">
                <strong>{t('timeline.placement', {})}</strong> {placement}
              </Text>
            )}
            {source && (
              <Text className="sourceContent" size="xs">
                <strong>{t('timeline.source')}</strong> <BibleLink bibleRef={source} />
              </Text>
            )}
          </HoverCard.Dropdown>
        </HoverCard>
      );
    };

    return events?.map(e => {
      return showSource ? eventWrapperWithSource(e) : eventWrapper(e);
    });
  }, [events, t, calendar, ceConvert, margins, flagHeight, showSource]);

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
