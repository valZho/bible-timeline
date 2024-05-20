import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { SegmentedControl, Anchor } from '@mantine/core';
import { IconBook, IconSquareHalf, IconConfetti } from '@tabler/icons-react';

import Section from '../Section';
import './style.scss';

const { persistAtom } = recoilPersist();

// —————————————— OPTION STATE & STORAGE ———————————————
const OPTIONS = {};
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
  const [ages, setAges] = useRecoilState(OPTIONS.ages);
  const [margins, setMargins] = useRecoilState(OPTIONS.margins);
  const [jubilee, setJubilee] = useRecoilState(OPTIONS.jubilee);

  const agesLink = (
    <Anchor
      href="https://biblearchaeology.org/research/topics/biblical-chronologies/4767-from-adam-to-abraham-the-latest-on-the-genesis-5-and-11-project"
      target="_blank"
    />
  );

  return (
    <div className="options">
      <Section
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
    </div>
  );
};

export default Timeline;
