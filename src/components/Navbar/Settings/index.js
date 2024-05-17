import React from 'react';
import { useTranslation } from 'react-i18next';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { useMantineColorScheme, SegmentedControl, Slider } from '@mantine/core';

import Section from '../Section';
import './style.scss';

const { persistAtom } = recoilPersist();

// —————————————— SETTINGS STATE & STORAGE ——————————————
const SETTINGS = {};
// Mantine automatically saves theme state
SETTINGS.scale = atom({
  key: 'settingsScale',
  default: 4,
  effects_UNSTABLE: [persistAtom],
});
export { SETTINGS };
// —————————————————————————————————————————————————————

const Settings = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [scale, setScale] = useRecoilState(SETTINGS.scale);
  const { t } = useTranslation();

  return (
    <div className="settings">
      <Section title={t('settings.theme.title')}>
        <SegmentedControl
          size="xs"
          value={colorScheme}
          onChange={setColorScheme}
          fullWidth
          data={[
            { value: 'light', label: t('settings.theme.light') },
            { value: 'dark', label: t('settings.theme.dark') },
          ]}
        />
      </Section>

      <Section title={t('settings.scale.title')}>
        <Slider
          value={scale}
          onChange={setScale}
          min={2}
          max={50}
          step={4}
          size="md"
          label={null}
          marks={[
            { value: 2, label: t('settings.scale.smaller') },
            { value: 14 },
            { value: 26 },
            { value: 38 },
            { value: 50, label: t('settings.scale.bigger') },
          ]}
        />
      </Section>
    </div>
  );
};

export default Settings;

// 2  4  6  8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50

// 2     6    10    14    18    22    26    30    34    38    42    46    50

// 2        8       14       20       26       32       38       44       50
// 2          10          18          26          34          42          50
// 2             12             22             32             42
// 2                14                26                38                50
