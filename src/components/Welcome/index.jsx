import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { IconHelp, IconMoodHappyFilled } from '@tabler/icons-react';

import './style.scss';

const Welcome = () => {
  const { t, i18n } = useTranslation();
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <>
      <Modal
        className="welcomeModal"
        opened={opened}
        onClose={close}
        title={
          <>
            <IconMoodHappyFilled />   {t('welcome.title')}
          </>
        }
        size="xl"
        transitionProps={{ transition: 'slide-down', duration: 500, timingFunction: 'ease' }}
        zIndex={1000}
      >
        {i18n.getResource('en', 'common', `welcome.message_wTags`).map((str, i) => (
          <p key={`welcome-p-${i}`}>
            <Trans i18nKey={str} />
          </p>
        ))}
      </Modal>
      <div className="welcomeLabel">
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            open();
          }}
        >
          <IconHelp stroke={1.5} />
        </a>
      </div>
    </>
  );
};

export default Welcome;
