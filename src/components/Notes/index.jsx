import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { useDisclosure } from '@mantine/hooks';
import { Accordion, Modal, Anchor } from '@mantine/core';
import {
  IconBook,
  IconBracketsContain,
  IconConfetti,
  IconCrossFilled,
  IconNotes,
  IconSettings,
  IconSettingsFilled,
  IconSquareToggle,
} from '@tabler/icons-react';

import TransWithBible from '../TransWithBible';

import OPTIONS from '@/data/state-options';
import './style.scss';

const Notes = () => {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const [notes, setNotes] = useRecoilState(OPTIONS.notes);

  const createAccordionItem = ({ key = '', components = [], icon = '' }) => (
    <Accordion.Item value={key}>
      <Accordion.Control icon={icon}>{t(`notes.${key}.title`)}</Accordion.Control>
      <Accordion.Panel>
        <TransWithBible i18nKey={`notes.${key}.description_wTags`} components={components} />
      </Accordion.Panel>
    </Accordion.Item>
  );

  const settingSpan = (
    <span className="settingLabel">
      <IconSettingsFilled size="18" stroke={1.5} />
    </span>
  );

  const sections = [
    {
      key: 'inclusiveTime',
      icon: <IconBracketsContain />,
    },
    {
      key: 'ages',
      icon: <IconBook />,
      components: [
        settingSpan,
        <Anchor
          href="https://biblearchaeology.org/research/topics/biblical-chronologies/4767-from-adam-to-abraham-the-latest-on-the-genesis-5-and-11-project"
          target="_blank"
          rel="noopen noreferrer"
        />,
      ],
    },
    {
      key: 'margins',
      icon: <IconSquareToggle />,
    },
    {
      key: 'jubilee',
      icon: <IconConfetti />,
      components: [settingSpan, <code />],
    },
    {
      key: 'crucifixion',
      icon: <IconCrossFilled />,
    },
  ]; //, 'margins', 'jubilee', 'crucifixion'];

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
        <Accordion
          variant="separated"
          radius="md"
          value={notes}
          onChange={x => {
            console.log(x);
            setNotes(x);
          }}
        >
          {sections.map(createAccordionItem)}
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
