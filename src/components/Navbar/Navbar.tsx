import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconSettingsFilled, IconInfoCircleFilled } from '@tabler/icons-react';
import { Drawer, Burger, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import About from './About';
import Settings from './Settings';

import './Navbar.scss';

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
        title={t('page.title')}
        opened={navOpen}
        onClose={navToggle.close}
      >
        <Tabs defaultValue="about">
          <Tabs.List>
            <Tabs.Tab value="about">
              <IconInfoCircleFilled size={18} />
              <span>{t('page.nav.about')}</span>
            </Tabs.Tab>
            <Tabs.Tab value="settings">
              <IconSettingsFilled size={18} />
              <span>{t('page.nav.settings')}</span>
            </Tabs.Tab>
          </Tabs.List>
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
