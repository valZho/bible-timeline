/**
 * Generate events of the Kingdoms
 * @returns {object}
 */
const eventData4 = () => {
  const events = {
    temple1start: { relative: { id: 'exodus', end: 480 }, years: 7, exact: true, color: 'cyan', extraBuffer: 200 },
    solomonReign: { relative: { id: 'temple1start', start: -4 }, years: 40, exact: true, color: 'grape' },
  };

  // need solomon in there for reference
  const kings = [
    ['solomonReign'],
    ['rehoboam', 17],
    ['abijam', 3],
    ['asa', 41],
    ['jehoshaphat', 25],
    ['jehoram', 8],
    ['ahaziah', 1],
    ['athaliah', 6],
    ['joash', 40],
    ['amaziah', 29],
    ['uzziah', 52],
    ['jotham', 16],
    ['ahaz', 16],
    ['hezekiah', 29],
    ['manasseh', 55],
    ['amon', 2],
    ['josiah', 31],
    ['jehoahaz', 0.25],
    ['eliakim', 11],
    ['jehoiachin', 0.25],
    ['zedekiah', 11],
  ];

  // start at Rehoboam
  for (let i = 1; i < kings.length; i++) {
    events[kings[i][0]] = {
      relative: { id: kings[i - 1][0], end: 0 },
      years: kings[i][1],
      exact: true,
      color: 'grape',
    };
  }

  events.saul = { relative: { id: 'saulReign', start: -30 }, years: 70 };
  events.saulReign = { relative: { id: 'davidReign', start: -40 }, years: 40, exact: true, color: 'grape' };
  events.david = { relative: { id: 'davidReign', start: -30 }, years: 70.5 };
  events.davidReign = { relative: { id: 'solomonReign', start: -40.5 }, years: 40.5, exact: true, color: 'grape' };
  events.solomon = { relative: { id: 'solomonReign', start: -25 }, years: 65, fuzzyStart: true };

  return events;
};

export default eventData4;
