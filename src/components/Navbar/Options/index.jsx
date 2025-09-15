import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { Alert, Accordion } from '@mantine/core';
import { IconSettingsQuestion } from '@tabler/icons-react';

import OPTIONS from '@/data/state-options';
import Option from './Option';
import './style.scss';

const Timeline = () => {
  const { t } = useTranslation();
  const [panels, setPanels] = useRecoilState(OPTIONS.panels);

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
          <Accordion.Control>{t('options.calculationsTitle')}</Accordion.Control>
          <Accordion.Panel>
            {/* AGES / MANUSCRIPT */}
            <Option
              option="manuscript"
              values={[
                { value: 'best', label: t('options.manuscript.best') },
                { value: 'lxx', label: t('options.manuscript.septuagint') },
                { value: 'mt', label: t('options.manuscript.masoretic') },
              ]}
            />

            {/* SOJOURN */}
            <Option
              option="sojourn"
              values={[
                { value: 'early', label: t('options.sojourn.early') },
                { value: 'late', label: t('options.sojourn.late') },
              ]}
            />

            {/* JUBILEE */}
            <Option
              option="jubilee"
              values={[
                { value: 'inclusive', label: t('options.jubilee.inclusive') },
                { value: 'exclusive', label: t('options.jubilee.exclusive') },
                { value: 'intercalated', label: t('options.jubilee.intercalated') },
              ]}
            />

            {/* END OF DANIEL'S 69 WEEKS */}
            <Option
              option="daniel69"
              values={[
                { value: 'birth', label: t('options.daniel69.birth') },
                { value: 'baptism', label: t('options.daniel69.baptism') },
                { value: 'death', label: t('options.daniel69.death') },
              ]}
            />

            {/* CRUCIFIXION */}
            <Option
              option="crucifixion"
              range={[26, 36, 1]}
              values={[
                { value: 26, label: t('options.crucifixion.optionLabels.0') },
                { value: 31, label: t('options.crucifixion.optionLabels.1') },
                { value: 36, label: t('options.crucifixion.optionLabels.2') },
              ]}
            />

            {/* PYRAMIDS */}
            <Option
              option="pyramids"
              values={[
                { value: 'mainstream', label: t('options.pyramids.mainstream') },
                { value: 'revised', label: t('options.pyramids.revised') },
              ]}
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item key="display" value="display">
          <Accordion.Control>{t('options.displayTitle')}</Accordion.Control>
          <Accordion.Panel>
            {/* MARGIN OF ERROR */}
            <Option
              option="margins"
              values={[
                { value: '', label: t('options.margins.off') },
                { value: 'on', label: t('options.margins.on') },
              ]}
            />

            {/* TIMELINE SCALE */}
            <Option
              option="scale"
              range={[1, scaleMax, 1]}
              values={[
                { value: 1, label: t('options.scale.smaller') },
                { value: scaleMax * 0.25, label: '' },
                { value: scaleMax * 0.5, label: '' },
                { value: scaleMax * 0.75, label: '' },
                { value: scaleMax, label: t('options.scale.bigger') },
              ]}
            />

            {/* VERTICAL TRACKS */}
            <Option
              option="trackMin"
              values={[
                { value: 'auto', label: t('options.trackMin.auto') },
                { value: '10', label: 10 },
                { value: '20', label: 20 },
                { value: 'all', label: t('options.trackMin.all') },
              ]}
            />

            {/* SHOW SOURCE POP-UPS */}
            <Option option="showSource" label={t('options.showSource.label')} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Timeline;
