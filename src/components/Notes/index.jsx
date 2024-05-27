import React from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '@mantine/core';
import { IconNotes } from '@tabler/icons-react';

import './style.scss';
import { useDisclosure } from '@mantine/hooks';

const Notes = () => {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="About this site">

      </Modal>
      <div className="notesLabel">
        <a href="#" onClick={e => {
          e.preventDefault();
          open()
        }}>
          <IconNotes size={35} stroke={1.5} /> {t('notes.title')}
        </a>
      </div>
    </>
  );
};

export default Notes;
