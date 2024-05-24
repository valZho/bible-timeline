import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Affix, Switch, Title, Text, Kbd, useMantineColorScheme, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars, IconCalendarMonth, IconBible } from '@tabler/icons-react';

import Navbar from './Navbar';
import Timeline from './Timeline';
import IconBiblicalTimeline from './IconBiblicalTimeline';
import './PageWrapper.scss';

const PageWrapper = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const theme = useMantineTheme();

  const iconStyle = { width: rem(16), height: rem(16) };
  const sunIcon = <IconSun style={iconStyle} stroke={2.5} color={theme.colors.yellow[4]} />;
  const moonIcon = <IconMoonStars style={iconStyle} stroke={2.5} color={theme.colors.blue[6]} />;

  return (
    <div className="pageWrapper">
      <Timeline />

      {/* scrolling notice */}
      <Affix position={{ bottom: 15, left: 40 + 48 }}>
        <Text className="scrollingTip" size="xs">
          <Trans i18nKey="tip" components={[<Kbd size="xs" />]} />
        </Text>
      </Affix>

      {/* title */}
      <Affix position={{ top: 20, left: 40 + 48 }}>
        <Title order={1} className="pageTitle">
          <IconBiblicalTimeline className="logo" size="50" stroke="1" />
          {t('title')}
        </Title>
      </Affix>

      {/* theme picker */}
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
