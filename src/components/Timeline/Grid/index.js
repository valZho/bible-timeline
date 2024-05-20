import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Grid = ({ scale = 4, width = 1, jubilee = 'exclusive' }) => {
  // years to show
  const totalYears = Math.ceil(width / scale) + 10;

  const ticks = [];
  for (let i = 1; i < totalYears; i++) {
    ticks.push(<div key={`tick${i}`} className="tick" style={{ width: scale }}></div>);
  }

  return <div className="grid">{ticks.map(t => t)}</div>;
};

Grid.propTypes = {
  jubilee: PropTypes.oneOf(['inclusive', 'exclusive', 'intercalated']),
  scale: PropTypes.number,
  width: PropTypes.number,
};

export default Grid;
