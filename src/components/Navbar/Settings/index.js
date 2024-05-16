import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMantineColorScheme, SegmentedControl, Slider } from '@mantine/core';

import Section from '../Section';
import './style.scss';

const Settings = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const { t } = useTranslation();

  const onSetTheme = useCallback(
    t => {
      setTheme(t);
      setColorScheme(t);
    },
    [setTheme, setColorScheme],
  );

  return (
    <div className="settings">
      <Section label={t('settings.theme.title')}>
        <SegmentedControl
          size="xs"
          value={theme}
          onChange={onSetTheme}
          fullWidth
          data={[
            { value: 'light', label: t('settings.theme.light') },
            { value: 'dark', label: t('settings.theme.dark') },
          ]}
        />
      </Section>

      <Section label={t('settings.scale.title')}>
        <Slider
          min={1}
          max={50}
          size="xl"
          marks={[
            { value: 1, label: t('settings.scale.smaller') },
            { value: 25, label: t('settings.scale.default') },
            { value: 50, label: t('settings.scale.bigger') },
          ]}
        />
      </Section>
    </div>
  );
};

export default Settings;
