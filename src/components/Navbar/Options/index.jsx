import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { SegmentedControl, Slider, Alert, Accordion, Text, Switch } from '@mantine/core';
import { IconSettingsQuestion } from '@tabler/icons-react';

import OPTIONS from '@/data/state-options';

import Option from './Option';
import './style.scss';

const Timeline = () => {
  const { t } = useTranslation();

  const [panels, setPanels] = useRecoilState(OPTIONS.panels);

  // calculations settings
  const [ages, setAges] = useRecoilState(OPTIONS.ages);
  const [sojourn, setSojourn] = useRecoilState(OPTIONS.sojourn);
  const [jubilee, setJubilee] = useRecoilState(OPTIONS.jubilee);
  const [crucifixion, setCrucifixion] = useRecoilState(OPTIONS.crucifixion);

  // display settings
  const [margins, setMargins] = useRecoilState(OPTIONS.margins);
  const [scale, setScale] = useRecoilState(OPTIONS.scale);
  const [trackMin, setTrackMin] = useRecoilState(OPTIONS.trackMin);
  const [showSource, setShowSource] = useRecoilState(OPTIONS.showSource);

  const controlsColor = 'yellow.5';
  const scaleMax = 20;

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
          <Accordion.Control>{t('options.calculations.title')}</Accordion.Control>
          <Accordion.Panel>
            {/* AGES / MANUSCRIPT */}
            <Option
              title={t('options.calculations.ages.title')}
              value={ages}
              onChange={setAges}
              options={[
                { value: 'best', label: t('options.calculations.ages.best') },
                { value: 'lxx', label: t('options.calculations.ages.septuagint') },
                { value: 'mt', label: t('options.calculations.ages.masoretic') },
              ]}
            />

            {/* SOJOURN */}
            <Option
              title={t('options.calculations.sojourn.title')}
              value={sojourn}
              onChange={setSojourn}
              options={[
                { value: 'early', label: t('options.calculations.sojourn.early') },
                { value: 'late', label: t('options.calculations.sojourn.late') },
              ]}
            />

            {/* JUBILEE */}
            <Option
              title={t('options.calculations.jubilee.title')}
              value={jubilee}
              onChange={setJubilee}
              options={[
                { value: 'inclusive', label: t('options.calculations.jubilee.inclusive') },
                { value: 'exclusive', label: t('options.calculations.jubilee.exclusive') },
                { value: 'intercalated', label: t('options.calculations.jubilee.intercalated') },
              ]}
            />

            {/* CRUCIFIXION */}
            <Option
              title={t('options.calculations.crucifixion.title')}
              value={crucifixion}
              onChange={setCrucifixion}
              range={[25, 35, 1]}
              options={[
                { value: 25, label: t('options.calculations.crucifixion.optionLabels.0') },
                { value: 30, label: t('options.calculations.crucifixion.optionLabels.1') },
                { value: 35, label: t('options.calculations.crucifixion.optionLabels.2') },
              ]}
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item key="display" value="display">
          <Accordion.Control>{t('options.display.title')}</Accordion.Control>
          <Accordion.Panel>
            {/* MARGIN OF ERROR */}
            <Option
              title={t('options.display.margins.title')}
              value={margins}
              onChange={setMargins}
              options={[
                { value: '', label: t('options.display.margins.off') },
                { value: 'on', label: t('options.display.margins.on') },
              ]}
            />

            {/* TIMELINE SCALE */}
            <Option
              title={t('options.display.scale.title')}
              value={scale}
              onChange={setScale}
              range={[1, scaleMax, 1]}
              options={[
                { value: 1, label: t('options.display.scale.smaller') },
                { value: scaleMax * 0.25, label: '' },
                { value: scaleMax * 0.5, label: '' },
                { value: scaleMax * 0.75, label: '' },
                { value: scaleMax, label: t('options.display.scale.bigger') },
              ]}
            />

            {/* VERTICAL TRACKS */}
            <Option
              title={t('options.display.trackMin.title')}
              value={trackMin}
              onChange={setTrackMin}
              options={[
                { value: 'auto', label: t('options.display.trackMin.auto') },
                { value: '10', label: 10 },
                { value: '20', label: 20 },
                { value: 'all', label: t('options.display.trackMin.all') },
              ]}
            />

            {/* SHOW SOURCE POP-UPS */}
            <Option
              title={t('options.display.showSource.title')}
              value={showSource}
              onChange={setShowSource}
              label={t('options.display.showSource.label')}
            />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Timeline;
