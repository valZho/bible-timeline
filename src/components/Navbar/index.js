import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  IconChartCandleFilled,
  IconSettingsFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react';
import { Drawer, Burger, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Timeline from './Timeline';
import About from './About';
import Settings from './Settings';

import './style.scss';

const Navbar = () => {
  const [navOpen, navToggle] = useDisclosure(true);
  const { t } = useTranslation();

  return (
    <>
      <Burger
        className="burger"
        opened={navOpen}
        onClick={navToggle.toggle}
        aria-label="Toggle navbar"
      />
      <Drawer
        className="navbar"
        withCloseButton={false}
        position="left"
        title={t('nav.title')}
        opened={navOpen}
        onClose={navToggle.close}
        transitionProps={{ duration: 500 }}
      >
        <Tabs defaultValue="timeline">
          <Tabs.List>
            <Tabs.Tab value="timeline">
              <IconChartCandleFilled className="timelineIcon" size={18} />
              <span>{t('nav.timeline.tab')}</span>
            </Tabs.Tab>

            <Tabs.Tab value="about">
              <IconInfoCircleFilled size={18} />
              <span>{t('nav.about.tab')}</span>
            </Tabs.Tab>

            <Tabs.Tab value="settings">
              <IconSettingsFilled size={18} />
              <span>{t('nav.settings.tab')}</span>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="timeline">
            <Timeline />
          </Tabs.Panel>

          <Tabs.Panel value="about">
            <About />
          </Tabs.Panel>

          <Tabs.Panel value="settings">
            <Settings />
          </Tabs.Panel>
        </Tabs>
      </Drawer>
    </>
  );
};

export default Navbar;
