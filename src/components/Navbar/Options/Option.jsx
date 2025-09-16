import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { Text, SegmentedControl, Slider, Switch } from '@mantine/core';

import OPTIONS from '@/data/state-options';

const Option = ({ option, values = [], range = [], label = '', isDisplay }) => {
  const { t } = useTranslation();
  const [value, setValue] = useRecoilState(OPTIONS[option]);

  const color = isDisplay ? 'gray.7' : 'yellow.5';

  let control = '';
  if (!range.length && !label) {
    control = (
      <SegmentedControl
        color={color}
        autoContrast
        size="xs"
        value={value}
        onChange={setValue}
        fullWidth
        data={values}
      />
    );
  }

  if (label) {
    control = (
      <Switch
        color={color}
        size="md"
        checked={value}
        onChange={e => setValue(e.currentTarget.checked)}
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
        onChange={setValue}
        min={range[0] || 1}
        max={range[1] || 1}
        step={range[2] || 1}
        marks={values}
      />
    );
  }

  return (
    <>
      <Text className="settingTitle" size="sm">
        {t(`options.${option}.title`)}
      </Text>
      {control}
    </>
  );
};

Option.propTypes = {
  isDisplay: PropTypes.bool,
  label: PropTypes.string,
  option: PropTypes.array,
  range: PropTypes.arrayOf(PropTypes.number),
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};

export default Option;
