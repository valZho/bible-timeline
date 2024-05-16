import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../Section';
import './style.scss';

const Timeline = () => {
  const { t } = useTranslation();
  return <Section>{t('nav.title')}</Section>;
};

export default Timeline;
