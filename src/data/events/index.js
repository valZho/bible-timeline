import adamToFlood from './adamToFlood';
import shemToTerah from './shemToTerah';

/**
 * EXAMPLES
 * —— Exact start date
 * { title: 'names.adam', start: 1, years: 930 }
 *
 * —— Start date relative to start date of another event
 * { title: 'names.seth', relative: { id: 'adam', start: 230 }, years: 912 }
 *
 * —— Start date relative to end date of another event
 * { title: '}
 *
 *
 * NOTES: fractions are allowed in dates, e.g., 1 month = 1/12
 */

const getBiblicalEvents = ({ ages = 'best', _margins = 4 }) => {
  const MT = ages === 'mt';
  const LXX = ages === 'lxx';
  return {
    ...adamToFlood(MT, LXX),
    ...shemToTerah(MT, LXX),
  };
};

export { getBiblicalEvents };
