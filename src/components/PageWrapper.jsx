import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ t }) => {
  return <h1>{t('page.title')}</h1>;
};

PageWrapper.defaultProps = {
  t: k => k,
};

PageWrapper.propTypes = {
  t: PropTypes.func,
};

export default PageWrapper;
