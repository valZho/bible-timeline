import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@mantine/core';

import './style.scss';

const Section = ({ label = '', children = '', compact = false }) => {
  return (
    <div className={`section ${compact ? 'compact' : ''}`}>
      <Divider labelPosition="left" label={label} />
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  compact: PropTypes.bool,
  label: PropTypes.string,
};

export default Section;
