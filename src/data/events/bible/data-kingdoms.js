/**
 * Generate events of the Kingdoms
 * @returns {object}
 */
const eventData4 = () => {
  const events = {
    temple1start: { relative: { id: 'exodus', end: 480 }, years: 7, exact: true, color: 'lime.6', extraBuffer: 200 },
    solomonReign: { relative: { id: 'temple1start', start: -4 }, years: 40, exact: true, color: 'grape.7' },

    // JUDAH (SOUTHERN KINGDOM) need solomon in there for reference
    rehoboam: { relative: { id: 'solomonReign', end: 0 }, color: 'grape.7', years: 17 },
    // abijam: { relative: { id: 'jeroboam1', start: 18 }, color: 'grape.7', years: 3 },
    // asa: { relative: { id: 'jeroboam1', start: 20 }, color: 'grape.7', years: 41 },
    // jehoshaphat: { relative: { id: 'ahab', start: 4 }, color: 'grape.7', years: 25 },
    // jehoram: { relative: { id: 'joram', start: 5 }, color: 'grape.7', years: 8 },
    // ahaziahSouth: { relative: { id: 'joram', start: 12 }, color: 'grape.7', years: 1 },
    // athaliah: { relative: { id: 'ahaziahSouth', end: 0 }, color: 'grape.7', years: 6 },
    // joash: { relative: { id: 'athaliah', end: 0 }, color: 'grape.7', years: 40 },
    // amaziah: { relative: { id: 'jehoash', start: 2 }, color: 'grape.7', years: 29 },
    // uzziah: { relative: { id: 'jeroboam2', start: 27 }, color: 'grape.7', years: 52 },
    // jotham: { relative: { id: 'pekah', start: 2 }, color: 'grape.7', years: 16 },
    // ahaz: { relative: { id: 'pekah', start: 17 }, color: 'grape.7', years: 16 },
    // hezekiah: { relative: { id: 'hoshea', start: 3 }, color: 'grape.7', years: 29 },
    // manasseh: { relative: { id: 'hezekiah', end: 0 }, color: 'grape.7', years: 55 },
    // amon: { relative: { id: 'manasseh', end: 0 }, color: 'grape.7', years: 2 },
    // josiah: { relative: { id: 'amon', end: 0 }, color: 'grape.7', years: 31 },
    // jehoahazSouth: { relative: { id: 'josiah', end: 0 }, color: 'grape.7', years: 0.25, exact: true },
    // jehoiakim: { relative: { id: 'jehoahazSouth', end: 0 }, color: 'grape.7', years: 11, exact: true },
    // jehoiachin: { relative: { id: 'jehoiakim', end: 0 }, color: 'grape.7', years: 0.25, exact: true },
    // zedekiah: { relative: { id: 'jehoiachin', end: 0 }, color: 'grape.7', years: 11 },

    // ISRAEL (NORTHERN KINGDOM)
    jeroboam1: { relative: { id: 'solomonReign', end: 0 }, color: 'grape.4', years: 22 },
    // nadab: { relative: { id: 'asa', start: 2 }, color: 'violet.6', years: 2 },
    // baasha: { relative: { id: 'asa', start: 3 }, color: 'violet.6', years: 24 },
    // elah: { relative: { id: 'asa', start: 12 }, color: 'violet.6', years: 9 },
    // zimri: { relative: { id: 'asa', start: 27 }, color: 'violet.6', years: 0 },
    // tibni: { relative: { id: 'asa', start: 27 }, color: 'violet.6', years: 4 },
    // omri: { relative: { id: 'asa', start: 27 }, color: 'violet.6', years: 12 },
    // ahab: { relative: { id: 'asa', start: 38 }, color: 'violet.6', years: 22 },
    // ahaziahNorth: { relative: { id: 'jehoshaphat', start: 17 }, color: 'violet.6', years: 2 },
    // joram: { relative: { id: 'jehoshaphat', start: 18 }, color: 'violet.6', years: 12 },
    // jehu: { relative: { id: 'jehoahazNorth', start: -28 }, color: 'violet.6', years: 28 },
    // jehoahazNorth: { relative: { id: 'joash', start: 23 }, color: 'violet.6', years: 17 },
    // jehoash: { relative: { id: 'joash', start: 37 }, color: 'violet.6', years: 16 },
    // jeroboam2: { relative: { id: 'amaziah', start: 15 }, color: 'violet.6', years: 41 },
    // zechariah: { relative: { id: 'uzziah', start: 38 }, color: 'violet.6', years: 0.5, exact: true },
    // shallum: { relative: { id: 'uzziah', start: 39 }, color: 'violet.6', years: 1 / 12, exact: true },
    // menahem: { relative: { id: 'uzziah', start: 39 }, color: 'violet.6', years: 10 },
    // pekahiah: { relative: { id: 'uzziah', start: 50 }, color: 'violet.6', years: 2 },
    // pekah: { relative: { id: 'uzziah', start: 52 }, color: 'violet.6', years: 20 },
    // hoshea: { relative: { id: 'ahaz', start: 12 }, color: 'violet.6', years: 9 },
  };

  // SPECIAL CASES
  events.saul = { relative: { id: 'saulReign', start: -30 }, years: 70 };
  events.saulReign = { relative: { id: 'davidReign', start: -40 }, years: 40, exact: true, color: 'grape.7' };

  events.david = { relative: { id: 'davidReign', start: -30 }, years: 70.5 };
  events.davidReign = { relative: { id: 'solomonReign', start: -40.5 }, years: 40.5, exact: true, color: 'grape.7' };

  events.solomon = { relative: { id: 'solomonReign', start: -25 }, years: 65, fuzzyStart: true };

  events.kingdomDivided = { relative: { id: 'solomonReign', end: 0 }, years: 0, color: 'lime.6' };

  return events;
};

export default eventData4;
