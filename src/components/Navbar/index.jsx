import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconSettings, IconCodeAsterix } from '@tabler/icons-react';
import { Drawer, Burger, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Options from './Options';
import Project from './Project';

import './style.scss';

const Navbar = () => {
  const [navOpen, navToggle] = useDisclosure(false);
  const { t } = useTranslation();

  return (
    <>
      <Burger
        className={`navbarBurger ${navOpen ? 'navOpen' : ''}`}
        opened={navOpen}
        onClick={navToggle.toggle}
        aria-label="Toggle navbar"
      />
      <Drawer
        className="navbar"
        position="left"
        title=""
        opened={navOpen}
        onClose={navToggle.close}
        closeOnEscape={false}
        closeOnClickOutside={false}
        transitionProps={{ duration: 500 }}
        withinPortal={false}
        withOverlay={false}
        trapFocus={false}
        lockScroll={false}
      >
        <Tabs defaultValue="options" variant="outline">
          <Tabs.List>
            <Tabs.Tab value="options">
              <IconSettings className="timelineIcon" size={20} stroke="1.5" />
              <span>{t('options.title')}</span>
            </Tabs.Tab>

            <Tabs.Tab value="project">
              <IconCodeAsterix size={20} stroke="1.5" />
              <span>{t('project.title')}</span>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="options">
            <Options />
          </Tabs.Panel>

          <Tabs.Panel value="project">
            <Project />
          </Tabs.Panel>
        </Tabs>
      </Drawer>
    </>
  );
};

export default Navbar;
