import React from 'react';
import PropTypes from 'prop-types';

import { Text, SegmentedControl, Slider, Switch } from '@mantine/core';

const Option = ({ title = '', value = '', options = [], range = [], label = '', onChange = () => {} }) => {
  const color = 'yellow.5';
  let control = '';

  if (!range.length && !label) {
    control = (
      <SegmentedControl
        color={color}
        autoContrast
        size="xs"
        value={value}
        onChange={onChange}
        fullWidth
        data={options}
      />
    );
  }

  if (label) {
    control = (
      <Switch
        color={color}
        size="md"
        checked={value}
        onChange={e => onChange(e.currentTarget.checked)}
        label={label}
        labelPosition="left"
      />
    );
  }

  if (range.length) {
    control = (
      <Slider
        color={color}
        value={value}
        onChange={onChange}
        min={range[0] || 1}
        max={range[1] || 1}
        step={range[2] || 1}
        marks={options}
      />
    );
  }

  return (
    <>
      <Text className="settingTitle" size="sm">
        {title}
      </Text>
      {control}
    </>
  );
};

Option.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  range: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Option;
