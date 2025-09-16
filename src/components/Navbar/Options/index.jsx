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

            {/* PYRAMIDS */}
            <Option
              option="pyramids"
              values={[
                { value: 'mainstream', label: t('options.pyramids.mainstream') },
                { value: 'revised', label: t('options.pyramids.revised') },
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

            {/* EXILE START */}
            <Option
              option="exileStart"
              values={[
                { value: 'deportation', label: t('options.exileStart.deportation') },
                { value: 'temple', label: t('options.exileStart.temple') },
              ]}
            />

            {/* START OF DANIEL'S 69 WEEKS (ISSUING OF DECREE) */}
            <Option
              option="decree"
              values={[
                { value: 'cyrus', label: t('options.decree.cyrus') },
                { value: 'darius', label: t('options.decree.darius') },
                { value: 'ezra', label: t('options.decree.ezra') },
                { value: 'nehemiah', label: t('options.decree.nehemiah') },
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

            {/* BIRTH YEAR */}
            <Option
              option="birthYear"
              range={[-9, -1, 1]}
              values={[
                { value: -9, label: t('options.birthYear.optionLabels.0') },
                { value: -7, label: t('options.birthYear.optionLabels.1') },
                { value: -5, label: t('options.birthYear.optionLabels.2') },
                { value: -3, label: t('options.birthYear.optionLabels.3') },
                { value: -1, label: t('options.birthYear.optionLabels.4') },
              ]}
            />

            {/* MINISTRY LENGTH */}
            <Option
              option="ministryLength"
              values={[
                { value: 'two', label: t('options.ministryLength.two') },
                { value: 'three', label: t('options.ministryLength.three') },
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
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item key="display" value="display">
          <Accordion.Control>{t('options.displayTitle')}</Accordion.Control>
          <Accordion.Panel>
            {/* MARGIN OF ERROR */}
            <Option
              isDisplay
              option="margins"
              values={[
                { value: '', label: t('options.margins.off') },
                { value: 'on', label: t('options.margins.on') },
              ]}
            />

            {/* TIMELINE SCALE */}
            <Option
              isDisplay
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
              isDisplay
              option="trackMin"
              values={[
                { value: 'auto', label: t('options.trackMin.auto') },
                { value: '10', label: 10 },
                { value: '20', label: 20 },
                { value: 'all', label: t('options.trackMin.all') },
              ]}
            />

            {/* SHOW SOURCE POP-UPS */}
            <Option isDisplay option="showSource" label={t('options.showSource.label')} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Timeline;
