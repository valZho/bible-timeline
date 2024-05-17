import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Anchor, Divider, Text, Badge } from '@mantine/core';
import {
  IconBrandGithubFilled,
  IconCopyright,
  IconMailFilled,
  IconCookie,
  IconBrandNextjs,
  IconBrandMantine,
  IconBrandReact,
  IconBrandNpm,
  IconLanguageHiragana,
  IconBrandSass,
} from '@tabler/icons-react';

import Section from '../Section';
import './style.scss';

const generateToolsLink = (title, link, Icon, color1, color2) => (
  // <Anchor href={link} target="_blank" className="toolLink">
  <Badge
    component="a"
    href={link}
    target="_blank"
    rel="noreferrer"
    variant="gradient"
    gradient={{ from: color1 || 'rgb(203, 56, 55)', to: color2 || 'rgb(192, 102, 102)', deg: 30 }}
    leftSection={<Icon size="21" stroke="1.5" />}
  >
    {title}
  </Badge>
  // </Anchor>
);

const toolsLinks = [
  {
    title: 'Next.js',
    link: 'https://nextjs.org',
    icon: IconBrandNextjs,
    c1: '#222',
    c2: '#555',
  },
  { title: 'Recoil', link: 'https://recoiljs.org', icon: IconBrandReact, c1: 'rgb(53, 120, 229)' },
  {
    title: 'Recoil-Nexus',
    link: 'https://www.npmjs.com/package/recoil-nexus',
    icon: IconBrandNpm,
  },
  {
    title: 'Mantine UI',
    link: 'https://mantine.dev',
    icon: IconBrandMantine,
    c1: 'rgb(51, 154, 240)',
  },
  {
    title: 'i18next',
    link: 'https://www.i18next.com',
    icon: IconLanguageHiragana,
    c1: 'rgb(81, 184, 174)',
  },
  {
    title: 'Sass',
    link: 'https://sass-lang.com',
    icon: IconBrandSass,
    c1: 'rgb(191, 64, 128)',
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      {/* PROJECT INFORMATION BLURB */}
      <Section compact>
        <Text size="md">
          <Trans i18nKey="nav.about.description" />
        </Text>
        <Text size="md">
          <Trans i18nKey="nav.about.description2" />
        </Text>
      </Section>

      <Section title={t('nav.about.builtWith')}>
        <div className="toolsLinks">
          {toolsLinks.map(tool =>
            generateToolsLink(tool.title, tool.link, tool.icon, tool.c1, tool.c2 || tool.c1),
          )}
        </div>
      </Section>

      {/* COPYRIGHT FOOTER */}
      <Section compact>
        <Text align="center" size="sm" c="blue">
          <Trans
            i18nKey="nav.about.copyright"
            components={[<IconCopyright size="17" alt="Copyright" />]}
          />
          <Divider orientation="vertical" size="md" />
          <Anchor href="mailto:timeline@inv.email?subject=Bible Timeline">
            <IconMailFilled size="17" /> {t('nav.about.contact')}
          </Anchor>
          <Divider orientation="vertical" size="md" />
          <Anchor href="https://github.com/valZho/bible-timeline" target="_blank">
            <IconBrandGithubFilled size="17" /> Github
          </Anchor>
        </Text>
        <Text align="center" size="xs" c="dimmed" className="cookieNotice">
          <IconCookie size="19" /> {t('nav.about.cookies')}
        </Text>
      </Section>
    </div>
  );
};

export default About;
