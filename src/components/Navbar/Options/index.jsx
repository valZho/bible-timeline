import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { SegmentedControl, Slider, Alert, Accordion, Text } from '@mantine/core';
import { IconSettingsQuestion } from '@tabler/icons-react';

import OPTIONS from '@/data/state-options';

import './style.scss';

const Timeline = () => {
  const { t } = useTranslation();

  const [panels, setPanels] = useRecoilState(OPTIONS.panels);

  const [ages, setAges] = useRecoilState(OPTIONS.ages);
  const [margins, setMargins] = useRecoilState(OPTIONS.margins);
  const [jubilee, setJubilee] = useRecoilState(OPTIONS.jubilee);
  const [crucifixion, setCrucifixion] = useRecoilState(OPTIONS.crucifixion);

  const [scale, setScale] = useRecoilState(OPTIONS.scale);
  const [trackMin, setTrackMin] = useRecoilState(OPTIONS.trackMin);

  const controlsColor = 'yellow.5';
  const scaleMax = 20;

  // const agesLink = (
  //   <Anchor
  //     href="https://biblearchaeology.org/research/topics/biblical-chronologies/4767-from-adam-to-abraham-the-latest-on-the-genesis-5-and-11-project"
  //     target="_blank"
  //   />
  // );

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
          <Accordion.Control>{t('options.calendar.title')}</Accordion.Control>
          <Accordion.Panel>
            <Text className="settingTitle" size="sm">
              {t('options.calendar.ages.title')}
            </Text>
            <SegmentedControl
              color={controlsColor}
              autoContrast
              size="xs"
              value={ages}
              onChange={setAges}
              fullWidth
              data={[
                { value: 'best', label: t('options.calendar.ages.best') },
                { value: 'lxx', label: t('options.calendar.ages.septuagint') },
                { value: 'mt', label: t('options.calendar.ages.masoretic') },
              ]}
            />

            <Text className="settingTitle" size="sm">
              {t('options.calendar.jubilee.title')}
            </Text>
            <SegmentedControl
              color={controlsColor}
              autoContrast
              size="xs"
              value={jubilee}
              onChange={setJubilee}
              fullWidth
              data={[
                { value: 'inclusive', label: t('options.calendar.jubilee.inclusive') },
                { value: 'exclusive', label: t('options.calendar.jubilee.exclusive') },
                { value: 'intercalated', label: t('options.calendar.jubilee.intercalated') },
              ]}
            />

            <Text className="settingTitle" size="sm">
              {t('options.calendar.crucifixion.title')}
            </Text>
            <Slider
              color={controlsColor}
              value={crucifixion}
              onChange={setCrucifixion}
              min={27}
              max={33}
              step={1}
              size="md"
              marks={[
                { value: 27, label: t('options.calendar.crucifixion.optionLabels.0') },
                { value: 30, label: t('options.calendar.crucifixion.optionLabels.1') },
                { value: 33, label: t('options.calendar.crucifixion.optionLabels.2') },
              ]}
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item key="display" value="display">
          <Accordion.Control>{t('options.display.title')}</Accordion.Control>
          <Accordion.Panel>
            <Text className="settingTitle" size="sm">
              {t('options.display.margins.title')}
            </Text>
            <SegmentedControl
              color={controlsColor}
              autoContrast
              size="xs"
              value={margins}
              onChange={setMargins}
              fullWidth
              data={[
                { value: 'on', label: t('options.display.margins.on') },
                { value: '', label: t('options.display.margins.off') },
              ]}
            />

            <Text className="settingTitle" size="sm">
              {t('options.display.scale.title')}
            </Text>
            <Slider
              color={controlsColor}
              value={scale}
              onChange={setScale}
              min={1}
              max={scaleMax}
              step={1}
              size="md"
              // label={null}
              marks={[
                { value: 1, label: t('options.display.scale.smaller') },
                { value: scaleMax * 0.25, label: '' },
                { value: scaleMax * 0.5, label: '' },
                { value: scaleMax * 0.75, label: '' },
                { value: scaleMax, label: t('options.display.scale.bigger') },
              ]}
            />

            <Text className="settingTitle" size="sm">
              {t('options.display.trackMin.title')}
            </Text>
            <SegmentedControl
              label={t('options.display.trackMin.title')}
              color={controlsColor}
              autoContrast
              size="xs"
              value={trackMin}
              onChange={setTrackMin}
              fullWidth
              data={[
                { value: 'auto', label: t('options.display.trackMin.auto') },
                { value: '10', label: t('options.display.trackMin.ten') },
                { value: '20', label: t('options.display.trackMin.twenty') },
                { value: '30', label: t('options.display.trackMin.thirty') },
                { value: 'all', label: t('options.display.trackMin.all') },
              ]}
            />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Timeline;
