import React from 'react';
import { Trans } from 'react-i18next';
import { Divider, Text } from '@mantine/core';

import './About.scss';

const About = () => {
  const githubLink = (
    <a href="https://github.com/valZho/bible-timeline" target="_blank" rel="noreferrer" />
  );

  return (
    <div className="about">
      <Text size="md">
        <Trans i18nKey="page.description" />
      </Text>
      <Divider />
      <Text align="center" size="sm" c="blue">
        <Trans i18nKey="page.attribution" components={[githubLink]} />
      </Text>
    </div>
  );
};

export default About;
