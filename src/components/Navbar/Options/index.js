import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { SegmentedControl, Anchor } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';

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
export { OPTIONS };
// —————————————————————————————————————————————————————

const Timeline = () => {
  const { t } = useTranslation();
  const [ages, setAges] = useRecoilState(OPTIONS.ages);

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
        description={<Trans i18nKey="options.ages.description" components={[agesLink]} />}
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
            { value: 'septuagint', label: t('options.ages.septuagint') },
            { value: 'masoretic', label: t('options.ages.masoretic') },
          ]}
        />
      </Section>
    </div>
  );
};

export default Timeline;
