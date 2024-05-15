import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

const PageWrapper = () => {
  const { t } = useTranslation();
  return <h1>{t('page.title')}</h1>;
};

PageWrapper.propTypes = {
  t: PropTypes.func,
};

export default PageWrapper;
