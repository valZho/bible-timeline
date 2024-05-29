import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { Affix, Title, Text, Kbd, useMantineColorScheme, useMantineTheme, rem, SegmentedControl } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import IconBiblicalTimeline from './IconBiblicalTimeline';

import OPTIONS from '../data/state-options';

import Notes from './Notes';
import Navbar from './Navbar';
import Timeline from './Timeline';
import './PageWrapper.scss';

const PageWrapper = () => {
  const { t } = useTranslation();
  const [calendar, setCalendar] = useRecoilState(OPTIONS.calendar);
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const iconStyle = { width: rem(16), height: rem(16) };
  const sunIcon = <IconSun style={iconStyle} stroke={2.5} />;
  const moonIcon = <IconMoonStars style={iconStyle} stroke={2.5} />;

  return (
    <div className="pageWrapper">
      <Timeline />
      <Navbar />

      {/* scrolling notice */}
      <Affix position={{ bottom: 15, left: 40 + 48 }}>
        <Text className="scrollingTip" size="xs">
          <Trans i18nKey="tip" components={[<Kbd size="xs" />]} />
        </Text>
      </Affix>

      {/* title */}
      <Affix position={{ top: 15, left: 40 + 48 }}>
        <Title order={1} className="pageTitle">
          <IconBiblicalTimeline className="logo" size="50" stroke="1" />
          {t('title')}
        </Title>
        <Notes />
      </Affix>

      {/* theme and calendar pickers */}
      <Affix position={{ top: 20, right: 40 }} className="rightToggles">
        <SegmentedControl
          className="calendarControl"
          size="xs"
          radius="xl"
          color={theme.colors.yellow[5]}
          autoContrast
          data={[
            { label: t('options.calendar.am'), value: 'am' },
            { label: t('options.calendar.ce'), value: 'ce' },
          ]}
          value={calendar}
          onChange={setCalendar}
        />
        <SegmentedControl
          className="themeControl"
          size="xs"
          radius="xl"
          color={theme.colors.yellow[5]}
          autoContrast
          data={[
            { label: moonIcon, value: 'dark' },
            { label: sunIcon, value: 'light' },
          ]}
          value={colorScheme}
          onChange={setColorScheme}
        />
      </Affix>
    </div>
  );
};

export default PageWrapper;
