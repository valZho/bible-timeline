import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Accordion } from '@mantine/core';

import './style.scss';

const Section = ({ title = '', children = '', Icon, compact = false, description = '' }) => {
  return (
    <div className={`section ${compact ? 'compact' : ''}`}>
      {description ? (
        <Accordion variant="contained" radius="md" chevronPosition="right">
          <Accordion.Item value="a">
            <Accordion.Control icon={<Icon size="22" />}>{title}</Accordion.Control>
            <Accordion.Panel>{description}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Divider labelPosition="left" label={title} />
      )}
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  compact: PropTypes.bool,
  description: PropTypes.node,
  Icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  title: PropTypes.string,
};

export default Section;
