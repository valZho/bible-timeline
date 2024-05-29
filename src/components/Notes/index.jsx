import React from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion, Modal } from '@mantine/core';
import { IconNotes } from '@tabler/icons-react';

import './style.scss';
import { useDisclosure } from '@mantine/hooks';

const Notes = () => {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={t('notes.title')}
        size="xl"
        transitionProps={{ transition: 'slide-down', duration: 500, timingFunction: 'ease' }}
        zIndex={1000}
      >
        <Accordion variant="contained" radius="md" chevronPosition="right">
          <Accordion.Item value="a">
            <Accordion.Control>SECTION 1</Accordion.Control>
            <Accordion.Panel>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id
              elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Modal>
      <div className="notesLabel">
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            open();
          }}
        >
          <IconNotes stroke={1.5} /> {t('notes.button')}
        </a>
      </div>
    </>
  );
};

export default Notes;
