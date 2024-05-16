import React from 'react';
import { Trans } from 'react-i18next';

import { Anchor, Divider, Text } from '@mantine/core';
import { IconBrandGithubFilled, IconCopyright } from '@tabler/icons-react';

import Section from '../Section';
import './style.scss';

const About = () => {
  const footerComponents = [
    <IconCopyright size="16" />,
    <Divider orientation="vertical" size="md" />,
    <IconBrandGithubFilled size="16" />,
    <Anchor href="https://github.com/valZho/bible-timeline" target="_blank" />,
  ];

  return (
    <div className="about">
      <Section label="Project Info" compact>
        <Text size="md">
          <Trans i18nKey="nav.about.description" />
        </Text>
      </Section>
      <Section compact>
        <Text align="center" size="sm" c="blue">
          <Trans i18nKey="nav.about.attribution" components={footerComponents} />
        </Text>
      </Section>
    </div>
  );
};

export default About;
