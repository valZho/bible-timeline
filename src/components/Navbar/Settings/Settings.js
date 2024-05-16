import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMantineColorScheme, SegmentedControl, Divider } from '@mantine/core';

import './Settings.scss';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const { setColorScheme } = useMantineColorScheme();
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
      <Divider label={t('settings.theme.title')} />
      <SegmentedControl
        size="md"
        value={theme}
        onChange={onSetTheme}
        fullWidth
        data={[
          { value: 'light', label: t('settings.theme.light') },
          { value: 'dark', label: t('settings.theme.dark') },
        ]}
      />
    </div>
  );
};

export default Settings;
