import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { Menu, Button, Badge, rem } from '@mantine/core';
import { IconSearch, IconChevronRight } from '@tabler/icons-react';

import { EVENTS } from '../../../data/EventsProvider';

import './style.scss';

const EventPicker = ({ scrollTo }) => {
  const { t } = useTranslation();
  const { events } = useRecoilValue(EVENTS);

  const getItems = useCallback(() => {
    return events.map(e => (
      <Menu.Item key={e.title} style={{ padding: 1 }}>
        <Badge
          color={e.display.color}
          size="lg"
          style={{ borderRadius: 0 }}
          rightSection={<IconChevronRight size="1rem" stroke={1.5} className="mantine-rotate-rtl" />}
          variant="filled"
          onClick={() => scrollTo(e.display.left, e.display.track)}
          fullWidth
        >
          {t(e.title)}
        </Badge>
      </Menu.Item>
    ));
  }, [events, scrollTo, t]);

  return (
    <div className="eventPicker">
      <Menu position="top-start" trigger="click">
        <Menu.Target>
          <Button leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}>
            {t('eventPicker.button')}
          </Button>
        </Menu.Target>
        <Menu.Dropdown className="eventPickerMenu">{getItems()}</Menu.Dropdown>
      </Menu>
    </div>
  );
};

EventPicker.propTypes = {
  scrollTo: PropTypes.func,
};

export default EventPicker;
