import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilCallback, useRecoilState } from 'recoil';

import { Alert, Accordion, Button } from '@mantine/core';
import { IconSettingsQuestion } from '@tabler/icons-react';

import OPTIONS, { calendarOptions, displayOptions } from '@/data/state-options';
import Option from './Option';
import './style.scss';

const Timeline = () => {
  const { t } = useTranslation();
  const [panels, setPanels] = useRecoilState(OPTIONS.panels);

  const renderOptions = (OPTIONS = [], isDisplay = false) =>
    OPTIONS.map(option => {
      switch (option.type) {
        case 'select':
          return (
            <Option
              isDisplay={isDisplay}
              option={option.id}
              values={option.values.map(value => ({ value, label: t(`options.${option.id}.${value}`) }))}
            />
          );

        case 'slider':
          return (
            <Option
              isDisplay={isDisplay}
              option={option.id}
              range={option.range}
              values={option.values.map((value, i) => ({
                value,
                label: t(`options.${option.id}.optionLabels.${i}`),
              }))}
            />
          );

        case 'boolean':
          return <Option isDisplay={isDisplay} option={option.id} label={t(`options.${option.id}.label`)} />;
      }
    });

  const performReset = useRecoilCallback(({ set }) => (e, optionsToReset) => {
    e.stopPropagation();
    optionsToReset.forEach(option => {
      const atom = OPTIONS[option.id];
      if (atom) {
        set(atom, option.default);
      }
    });
  });

  return (
    <div className="options">
      <Alert
        variant="light"
        color="blue"
        title={t('options.notificationTitle')}
        icon={<IconSettingsQuestion />}
        className="alertMessage"
      >
        {t('options.notificationText')}
      </Alert>

      <Accordion variant="contained" multiple value={panels} onChange={setPanels}>
        <Accordion.Item key="calendar" value="calendar">
          <Accordion.Control>
            {t('options.calculationsTitle')}{' '}
            <Button color="orange" size="compact-xs" onClick={e => performReset(e, calendarOptions)}>
              {t('options.reset')}
            </Button>
          </Accordion.Control>
          <Accordion.Panel>{renderOptions(calendarOptions)}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item key="display" value="display">
          <Accordion.Control>
            {t('options.displayTitle')}{' '}
            <Button color="orange" size="compact-xs" onClick={e => performReset(e, displayOptions)}>
              {t('options.reset')}
            </Button>
          </Accordion.Control>
          <Accordion.Panel>{renderOptions(displayOptions, true)}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Timeline;
