import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingOverlay, Affix, Switch, useMantineColorScheme, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

import Navbar from './Navbar';
import Timeline from './Timeline';

const PageWrapper = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const theme = useMantineTheme();

  const sunIcon = <IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} color={theme.colors.yellow[4]} />;

  const moonIcon = (
    <IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} color={theme.colors.blue[6]} />
  );

  console.log('====', colorScheme);

  return (
    <div className="pageWrapper">
      <LoadingOverlay
        visible={false}
        zIndex="3000"
        overlayProps={{ blur: 2 }}
        loaderProps={{ color: 'blue', type: 'dots', size: 'xl' }}
      />
      <Navbar />
      <Timeline />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Switch
          size="xl"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
          defaultValue={true}
          value={colorScheme}
          onChange={e => {
            setColorScheme(e?.target?.checked ? 'dark' : 'light');
          }}
        />
      </Affix>
    </div>
  );
};

export default PageWrapper;
