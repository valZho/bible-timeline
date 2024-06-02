import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { useDisclosure } from '@mantine/hooks';
import { Accordion, Modal, Anchor } from '@mantine/core';
import {
  IconBook,
  IconClipboardList,
  IconConfetti,
  IconCrossFilled,
  IconHourglassLow,
  IconNotes,
  IconSettingsFilled,
  IconSquareToggle,
  IconTool,
  // IconWalk,
} from '@tabler/icons-react';

import TransWithBible from '../TransWithBible';

import OPTIONS from '@/data/state-options';
import './style.scss';

const Notes = () => {
  const { t, i18n } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const [notes, setNotes] = useRecoilState(OPTIONS.notes);

  const settingSpan = (
    <span className="settingLabel">
      <IconSettingsFilled size="18" stroke={1.5} />
    </span>
  );

  const sections = [
    {
      key: 'howMade',
      icon: <IconTool />,
    },
    {
      key: 'inclusiveTime',
      icon: <IconHourglassLow />,
    },
    {
      key: 'ages',
      icon: <IconBook />,
      components: [
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
      components: [<code />],
    },
    {
      key: 'crucifixion',
      icon: <IconCrossFilled />,
    },
    // {
    //   key: 'sojourning',
    //   icon: <IconWalk />,
    // },
    {
      key: 'version',
      icon: <IconClipboardList />,
    },
  ];

  return (
    <>
      <Modal
        className="notesModal"
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
          onChange={newArr => setNotes(newArr.filter(tab => !notes.includes(tab)))}
        >
          {sections.map(({ key = '', components = [], icon = '' }) => (
            <Accordion.Item value={key}>
              <Accordion.Control icon={icon}>{t(`notes.${key}.title`)}</Accordion.Control>
              <Accordion.Panel>
                {/* a little trick here to use an array of strings for paragraphs -- WAY easier to manage and maintain */}
                {i18n.getResource('en', 'common', `notes.${key}.description_wTags`).map(str => (
                  <p>
                    <TransWithBible i18nKey={str} components={[settingSpan, ...components]} />
                  </p>
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
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
