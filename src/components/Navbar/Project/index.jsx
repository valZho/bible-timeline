import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Anchor, Divider, Text, Badge } from '@mantine/core';
import { IconBrandGithubFilled, IconCopyright, IconMailFilled, IconCookie } from '@tabler/icons-react';

import toolsList from './toolsList';
import './style.scss';

const generateToolsLink = (title, link, Icon, color1, color2) => (
  // <Anchor href={link} target="_blank" className="toolLink">
  <Badge
    key={title}
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

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="projectInfo">
      {/* PROJECT INFORMATION BLURB */}
      <Text size="sm">{t('project.description')}</Text>
      <Text size="sm">
        <Trans i18nKey="project.description2_wTags" />
      </Text>

      {/* BUILT WITH */}
      <Divider labelPosition="left" label={t('project.builtWith')} />
      <div className="toolsLinks">
        {toolsList.map(tool => generateToolsLink(tool.title, tool.link, tool.icon, tool.c1, tool.c2 || tool.c1))}
      </div>

      {/* COPYRIGHT FOOTER */}
      <Divider labelPosition="left" />
      <div className="copyright">
        <Text align="center" data-size="sm" c="blue">
          <Trans i18nKey="project.copyright" components={[<IconCopyright size="17" alt="Copyright" />]} />
        </Text>
        <Divider className="vert" orientation="vertical" size="md" />
        <Text align="center" data-size="sm" c="blue">
          <Anchor href="mailto:timeline@inv.email?subject=Bible Timeline">
            <span>
              <IconMailFilled size="17" /> {t('project.contact')}
            </span>
          </Anchor>
        </Text>
        <Divider className="vert" orientation="vertical" size="md" />
        <Text align="center" data-size="sm" c="blue">
          <Anchor href="https://github.com/valZho/bible-timeline" target="_blank">
            <span>
              <IconBrandGithubFilled size="17" /> Github
            </span>
          </Anchor>
        </Text>
      </div>
      <Text align="center" size="xs" c="dimmed" className="cookieNotice">
        <IconCookie size="19" /> {t('project.cookies')}
      </Text>
    </div>
  );
};

export default Project;
