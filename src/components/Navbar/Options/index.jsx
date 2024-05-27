import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { SegmentedControl, Anchor, Slider, Divider } from '@mantine/core';
import { IconBook, IconSquareHalf, IconConfetti, IconAntennaBars5, IconCross } from '@tabler/icons-react';

import OPTIONS from '@/data/state-options';
import BibleLink from '@/components/BibleLink';
import Section from '../Section';

import './style.scss';

const Timeline = () => {
  const { t } = useTranslation();
  const [scale, setScale] = useRecoilState(OPTIONS.scale);
  const [ages, setAges] = useRecoilState(OPTIONS.ages);
  const [margins, setMargins] = useRecoilState(OPTIONS.margins);
  const [jubilee, setJubilee] = useRecoilState(OPTIONS.jubilee);
  const [trackMin, setTrackMin] = useRecoilState(OPTIONS.trackMin);
  const [crucifixion, setCrucifixion] = useRecoilState(OPTIONS.crucifixion);

  const controlsColor = 'yellow.5';
  const scaleMax = 20;

  const agesLink = (
    <Anchor
      href="https://biblearchaeology.org/research/topics/biblical-chronologies/4767-from-adam-to-abraham-the-latest-on-the-genesis-5-and-11-project"
      target="_blank"
    />
  );

  return (
    <div className="options">
      <Section
        isSetting
        title={t('options.ages.title')}
        description={<Trans i18nKey="options.ages.description_wTags" components={[agesLink]} />}
        Icon={IconBook}
      >
        <SegmentedControl
          color={controlsColor}
          autoContrast
          size="xs"
          value={ages}
          onChange={setAges}
          fullWidth
          data={[
            { value: 'best', label: t('options.ages.best') },
            { value: 'lxx', label: t('options.ages.septuagint') },
            { value: 'mt', label: t('options.ages.masoretic') },
          ]}
        />
      </Section>

      <Section
        isSetting
        title={t('options.margins.title')}
        description={<Trans i18nKey="options.margins.description_wTags" />}
        Icon={IconSquareHalf}
      >
        <SegmentedControl
          color={controlsColor}
          autoContrast
          size="xs"
          value={margins}
          onChange={setMargins}
          fullWidth
          data={[
            { value: 'on', label: t('options.margins.on') },
            { value: '', label: t('options.margins.off') },
          ]}
        />
      </Section>

      <Section
        isSetting
        title={t('options.jubilee.title')}
        description={<Trans i18nKey="options.jubilee.description_wTags" />}
        Icon={IconConfetti}
      >
        <SegmentedControl
          color={controlsColor}
          autoContrast
          size="xs"
          value={jubilee}
          onChange={setJubilee}
          fullWidth
          data={[
            { value: 'inclusive', label: t('options.jubilee.inclusive') },
            { value: 'exclusive', label: t('options.jubilee.exclusive') },
            { value: 'intercalated', label: t('options.jubilee.intercalated') },
          ]}
        />
      </Section>

      <Section
        isSetting
        title={t('options.crucifixion.title')}
        description={
          <Trans
            i18nKey="options.crucifixion.description_wTags"
            components={[<BibleLink bibleRef="John19:31" />, <BibleLink bibleRef="Matt12:40" />]}
          />
        }
        Icon={IconCross}
      >
        <Slider
          color={controlsColor}
          value={crucifixion}
          onChange={setCrucifixion}
          min={27}
          max={33}
          step={1}
          size="md"
          marks={[
            { value: 27, label: t('options.crucifixion.optionLabels.0') },
            { value: 30, label: t('options.crucifixion.optionLabels.1') },
            { value: 33, label: t('options.crucifixion.optionLabels.2') },
          ]}
        />
      </Section>

      <Section
        isSetting
        title={t('options.display.title')}
        Icon={IconAntennaBars5}
        iconStyle={{ transform: 'rotate(90deg)' }}
      >
        <Divider label={t('options.display.scale.title')} labelPosition="left" size="md" />
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
        <Divider label={t('options.display.trackMin.title')} labelPosition="left" size="md" />
        <SegmentedControl
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
      </Section>
    </div>
  );
};

export default Timeline;
