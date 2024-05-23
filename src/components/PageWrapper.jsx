import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
  LoadingOverlay,
  Affix,
  Switch,
  Title,
  Text,
  Kbd,
  useMantineColorScheme,
  useMantineTheme,
  rem,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

import Navbar from './Navbar';
import Timeline from './Timeline';

const PageWrapper = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const theme = useMantineTheme();

  const iconStyle = { width: rem(16), height: rem(16) };
  const sunIcon = <IconSun style={iconStyle} stroke={2.5} color={theme.colors.yellow[4]} />;
  const moonIcon = <IconMoonStars style={iconStyle} stroke={2.5} color={theme.colors.blue[6]} />;

  console.log('--->', theme);
  return (
    <div className="pageWrapper">
      <LoadingOverlay
        visible={false}
        zIndex="3000"
        overlayProps={{ blur: 2 }}
        loaderProps={{ color: 'blue', type: 'dots', size: 'xl' }}
      />
      <Timeline />
      <Affix position={{ bottom: 15, left: 40 + 48 }}>
        <Text className="scrollingTip" size="xs">
          <Trans i18nKey="tip" components={[<Kbd size="xs" />]} />
        </Text>
      </Affix>
      <Affix position={{ top: 20, left: 40 + 48 }}>
        <Title order={1}>{t('title')}</Title>
      </Affix>
      <Affix position={{ top: 20, right: 40 }}>
        <Switch
          size="lg"
          onLabel={sunIcon}
          offLabel={moonIcon}
          checked={colorScheme === 'light'}
          onChange={e => {
            setColorScheme(e?.currentTarget?.checked ? 'light' : 'dark');
          }}
        />
      </Affix>
      <Navbar />
    </div>
  );
};

export default PageWrapper;
