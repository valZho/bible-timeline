import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Accordion } from '@mantine/core';

import './style.scss';

const Section = ({ title = '', children = '', Icon, iconStyle = {}, compact = false, description = '', isSetting }) => {
  const icon = Icon ? <Icon size="22" style={iconStyle} /> : '';
  const classes = ['section', compact ? 'compact' : ''].join(' ');

  let header = '';

  if (isSetting) {
    header = (
      <Accordion variant="contained" radius="md" chevronPosition="right">
        <Accordion.Item value="a">
          <Accordion.Control icon={icon}>{title}</Accordion.Control>
          <Accordion.Panel>{description}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  } else if (isSetting) {
    header = <>{title}</>;
  } else {
    header = <Divider labelPosition="left" label={title} />;
  }

  return (
    <div className={classes}>
      {header}
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  compact: PropTypes.bool,
  description: PropTypes.node,
  Icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  iconStyle: PropTypes.object,
  isSetting: PropTypes.bool,
  title: PropTypes.string,
};

export default Section;
