import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconAlignRight, IconSettingsFilled, IconInfoCircleFilled } from '@tabler/icons-react';
import { Drawer, Burger, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Options from './Options';
import Info from './Info';
import Settings from './Settings';

import './style.scss';

const Navbar = () => {
  const [navOpen, navToggle] = useDisclosure(false);
  const { t } = useTranslation();

  return (
    <>
      <Burger
        className={navOpen ? 'navOpen' : ''}
        opened={navOpen}
        onClick={navToggle.toggle}
        aria-label="Toggle navbar"
      />
      <Drawer
        className="navbar"
        position="left"
        title={t('nav.title')}
        opened={navOpen}
        onClose={navToggle.close}
        closeOnEscape={false}
        closeOnClickOutside={false}
        transitionProps={{ duration: 500 }}
        withinPortal={false}
      >
        <Tabs defaultValue="options" variant="outline">
          <Tabs.List grow>
            <Tabs.Tab value="options">
              <IconAlignRight className="timelineIcon" size={18} stroke="1.5" />
              <span>{t('nav.options.tab')}</span>
            </Tabs.Tab>

            <Tabs.Tab value="settings">
              <IconSettingsFilled size={18} stroke="1.5" />
              <span>{t('nav.settings.tab')}</span>
            </Tabs.Tab>

            <Tabs.Tab value="info">
              <IconInfoCircleFilled size={18} stroke="1.5" />
              <span>{t('nav.info.tab')}</span>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="options">
            <Options />
          </Tabs.Panel>

          <Tabs.Panel value="info">
            <Info />
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
