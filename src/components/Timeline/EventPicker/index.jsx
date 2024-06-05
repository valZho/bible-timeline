import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { useDisclosure } from '@mantine/hooks';
import { Badge, Skeleton, ScrollArea } from '@mantine/core';
import { IconLogin2, IconChevronsRight } from '@tabler/icons-react';

import CALENDAR from '@/data/state-calendar';

import './style.scss';

const EventPicker = ({ scrollTo }) => {
  const { t } = useTranslation();
  const events = useRecoilValue(CALENDAR.events);
  const [open, { toggle, close }] = useDisclosure(false);

  const getItems = useCallback(() => {
    return events.map(e => (
      <Badge
        key={e.key}
        autoContrast
        className="event"
        color={e.display.color || 'blue.6'}
        size="lg"
        style={{ borderRadius: 0 }}
        rightSection={<IconChevronsRight size={18} stroke={1.5} className="mantine-rotate-rtl" />}
        variant="filled"
        onClick={() => {
          close();
          scrollTo(e.display.left, e.display.track);
        }}
      >
        {t(`events.${e.key}.title`)}
      </Badge>
    ));
  }, [close, events, scrollTo, t]);

  return events.length ? (
    <>
      <div className={`eventPicker ${open ? 'open' : 'closed'}`}>
        <div className="toggleButton" onClick={toggle}>
          <IconLogin2 size={18} /> {t('eventPicker.button')}
        </div>
        <div className="eventList">
          <div className="title">{t('eventPicker.title')}</div>
          <ScrollArea className="menuWrapper" type="always" offsetScrollbars="false">
            <div className="menu">{getItems()}</div>
          </ScrollArea>
        </div>
      </div>
    </>
  ) : (
    <Skeleton className="eventPicker skeleton" width={188} height={36} />
  );
};

EventPicker.propTypes = {
  scrollTo: PropTypes.func,
};

export default EventPicker;
