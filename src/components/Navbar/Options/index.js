import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { SegmentedControl, Anchor, Slider } from '@mantine/core';
import { IconBook, IconSquareHalf, IconConfetti, IconAntennaBars5 } from '@tabler/icons-react';

import Section from '../Section';
import './style.scss';

const { persistAtom } = recoilPersist();

// —————————————— OPTION STATE & STORAGE ———————————————
const OPTIONS = {};
OPTIONS.scale = atom({
  key: 'optionsScale',
  default: 4,
  effects_UNSTABLE: [persistAtom],
});
OPTIONS.ages = atom({
  key: 'optionsAges',
  default: 'best',
  effects_UNSTABLE: [persistAtom],
});
OPTIONS.margins = atom({
  key: 'optionsMargins',
  default: 'on',
  effects_UNSTABLE: [persistAtom],
});
OPTIONS.jubilee = atom({
  key: 'optionsJubilee',
  default: 'exclusive',
  effects_UNSTABLE: [persistAtom],
});
export { OPTIONS };
// —————————————————————————————————————————————————————

const Timeline = () => {
  const { t } = useTranslation();
  const [scale, setScale] = useRecoilState(OPTIONS.scale);
  const [ages, setAges] = useRecoilState(OPTIONS.ages);
  const [margins, setMargins] = useRecoilState(OPTIONS.margins);
  const [jubilee, setJubilee] = useRecoilState(OPTIONS.jubilee);

  const scaleMax = 50;

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
          color="blue"
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
          color="blue"
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
          color="blue"
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
        title={t('settings.scale.title')}
        Icon={IconAntennaBars5}
        iconStyle={{ transform: 'rotate(90deg)' }}
      >
        <Slider
          value={scale}
          onChange={setScale}
          min={1}
          max={scaleMax}
          step={1}
          size="md"
          label={null}
          marks={[
            { value: 1, label: t('settings.scale.smaller') },
            { value: scaleMax * 0.25, label: '' },
            { value: scaleMax * 0.5, label: '' },
            { value: scaleMax * 0.75, label: '' },
            { value: scaleMax, label: t('settings.scale.bigger') },
          ]}
        />
      </Section>
    </div>
  );
};

export default Timeline;
