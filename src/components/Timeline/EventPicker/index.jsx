import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { Menu, Button, Badge, Skeleton } from '@mantine/core';
import { IconLogin2, IconChevronsRight } from '@tabler/icons-react';

import CALENDAR from '../../../data/state-calendar';

import './style.scss';

const EventPicker = ({ scrollTo }) => {
  const { t } = useTranslation();
  const events = useRecoilValue(CALENDAR.events);

  const getItems = useCallback(() => {
    return events.map(e => (
      <Menu.Item key={e.key} style={{ padding: 1 }}>
        <Badge
          color={e.display.color}
          size="lg"
          style={{ borderRadius: 0 }}
          rightSection={<IconChevronsRight size={18} stroke={1.5} className="mantine-rotate-rtl" />}
          variant="filled"
          onClick={() => scrollTo(e.display.left, e.display.track)}
          fullWidth
        >
          {t(`events.${e.key}.title`)}
        </Badge>
      </Menu.Item>
    ));
  }, [events, scrollTo, t]);

  return events.length ? (
    <div className="eventPicker">
      <Menu position="top-start" trigger="click">
        <Menu.Target>
          <Button leftSection={<IconLogin2 size={18} />}>{t('eventPicker.button')}</Button>
        </Menu.Target>
        <Menu.Dropdown className="eventPickerMenu">{getItems()}</Menu.Dropdown>
      </Menu>
    </div>
  ) : (
    <Skeleton className="eventPicker skeleton" width={188} height={36} />
  );
};

EventPicker.propTypes = {
  scrollTo: PropTypes.func,
};

export default EventPicker;
