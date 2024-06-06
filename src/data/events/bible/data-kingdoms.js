/**
 * Generate events of the Kingdoms
 * @returns {object}
 */
const eventData4 = () => {
  const events = {
    temple1start: { relative: { id: 'exodus', end: 480 }, years: 7, exact: true, color: 'lime.6', extraBuffer: 200 },
    solomonReign: { relative: { id: 'temple1start', start: -4 }, years: 40, color: 'grape.7', exactEnd: true },

    // JUDAH (SOUTHERN KINGDOM) need solomon in there for reference
    rehoboam: { relative: { id: 'solomonReign', end: 0 }, color: 'grape.7', years: 17, exact: true },
    // abijam: { relative: { id: 'rehoboam', end: 0 }, color: 'grape.7', years: 3 },
    abijam: { relative: { id: 'rehoboam', end: 0.5 }, color: 'grape.7', years: 3 },
    // asa: { relative: { id: 'jeroboam1', start: 20 }, color: 'grape.7', years: 41 },
    asa: { relative: { id: 'abijam', end: 0.5 }, color: 'grape.7', years: 41 },
    // jehoshaphat: { relative: { id: 'ahab', start: 4 }, color: 'grape.7', years: 25 },
    jehoshaphat: { relative: { id: 'asa', end: 0.5 }, color: 'grape.7', years: 25 },
    // jehoram: { relative: { id: 'joram', start: 5 }, color: 'grape.7', years: 8 },
    jehoram: { relative: { id: 'jehoshaphat', end: 0.5 }, color: 'grape.7', years: 8 },
    // ahaziahSouth: { relative: { id: 'joram', start: 12 }, color: 'grape.7', years: 1 },
    ahaziahSouth: { relative: { id: 'jehoram', end: 0.5 }, color: 'grape.7', years: 1 },
    // athaliah: { relative: { id: 'ahaziahSouth', end: 0 }, color: 'grape.7', years: 6 },
    athaliah: { relative: { id: 'ahaziahSouth', end: 0.5 }, color: 'grape.7', years: 6 },
    // joash: { relative: { id: 'athaliah', end: 0 }, color: 'grape.7', years: 40 },
    joash: { relative: { id: 'athaliah', end: 0.5 }, color: 'grape.7', years: 40 },
    // amaziah: { relative: { id: 'jehoash', start: 2 }, color: 'grape.7', years: 29 },
    amaziah: { relative: { id: 'joash', end: 0.5 }, color: 'grape.7', years: 29 },
    // uzziah: { relative: { id: 'jeroboam2', start: 27 }, color: 'grape.7', years: 52 },
    uzziah: { relative: { id: 'amaziah', end: 0.5 }, color: 'grape.7', years: 52 },
    // jotham: { relative: { id: 'pekah', start: 2 }, color: 'grape.7', years: 16 },
    jotham: { relative: { id: 'uzziah', end: 0.5 }, color: 'grape.7', years: 16 },
    // ahaz: { relative: { id: 'pekah', start: 17 }, color: 'grape.7', years: 16 },
    ahaz: { relative: { id: 'jotham', end: 0.5 }, color: 'grape.7', years: 16 },
    // hezekiah: { relative: { id: 'hoshea', start: 3 }, color: 'grape.7', years: 29 },
    hezekiah: { relative: { id: 'ahaz', end: 0.5 }, color: 'grape.7', years: 29 },
    // manasseh: { relative: { id: 'hezekiah', end: 0 }, color: 'grape.7', years: 55 },
    manasseh: { relative: { id: 'hezekiah', end: 0.5 }, color: 'grape.7', years: 55 },
    // amon: { relative: { id: 'manasseh', end: 0 }, color: 'grape.7', years: 2 },
    amon: { relative: { id: 'manasseh', end: 0.5 }, color: 'grape.7', years: 2 },
    // josiah: { relative: { id: 'amon', end: 0 }, color: 'grape.7', years: 31 },
    josiah: { relative: { id: 'amon', end: 0.5 }, color: 'grape.7', years: 31 },
    // jehoahazSouth: { relative: { id: 'josiah', end: 0 }, color: 'grape.7', years: 0.25, exact: true },
    jehoahazSouth: { relative: { id: 'josiah', end: 0.5 }, color: 'grape.7', years: 0.25, exact: true },
    // jehoiakim: { relative: { id: 'jehoahazSouth', end: 0 }, color: 'grape.7', years: 11, exact: true },
    jehoiakim: { relative: { id: 'jehoahazSouth', end: 0.5 }, color: 'grape.7', years: 11, exact: true },
    // jehoiachin: { relative: { id: 'jehoiakim', end: 0 }, color: 'grape.7', years: 0.25, exact: true },
    jehoiachin: { relative: { id: 'jehoiakim', end: 0.5 }, color: 'grape.7', years: 0.25, exact: true },
    // zedekiah: { relative: { id: 'jehoiachin', end: 0 }, color: 'grape.7', years: 11 },
    zedekiah: { relative: { id: 'jehoiachin', end: 0.5 }, color: 'grape.7', years: 11 },

    // ISRAEL (NORTHERN KINGDOM)
    jeroboam1: { relative: { id: 'solomonReign', end: 0 }, color: 'grape.4', years: 22 },
    // nadab: { relative: { id: 'asa', start: 2 }, color: 'grape.4', years: 2 },
    // baasha: { relative: { id: 'asa', start: 3 }, color: 'grape.4', years: 24 },
    // elah: { relative: { id: 'asa', start: 26 }, color: 'grape.4', years: 2 },
    // zimri: { relative: { id: 'asa', start: 27 }, color: 'grape.4', years: 0 },
    // tibni: { relative: { id: 'asa', start: 27 }, color: 'grape.4', years: 4 },
    // omri: { relative: { id: 'asa', start: 27 }, color: 'grape.4', years: 12 },
    // ahab: { relative: { id: 'asa', start: 38 }, color: 'grape.4', years: 22 },
    // ahaziahNorth: { relative: { id: 'jehoshaphat', start: 17 }, color: 'grape.4', years: 2 },
    // joram: { relative: { id: 'jehoshaphat', start: 18 }, color: 'grape.4', years: 12 },
    // jehu: { relative: { id: 'jehoahazNorth', start: -28 }, color: 'grape.4', years: 28 },
    // jehoahazNorth: { relative: { id: 'joash', start: 23 }, color: 'grape.4', years: 17 },
    // jehoash: { relative: { id: 'joash', start: 37 }, color: 'grape.4', years: 16 },
    // jeroboam2: { relative: { id: 'amaziah', start: 15 }, color: 'grape.4', years: 41 },
    // zechariah: { relative: { id: 'uzziah', start: 38 }, color: 'grape.4', years: 0.5, exact: true },
    // shallum: { relative: { id: 'uzziah', start: 39 }, color: 'grape.4', years: 0.083, exact: true },
    // menahem: { relative: { id: 'uzziah', start: 39 }, color: 'grape.4', years: 10 },
    // pekahiah: { relative: { id: 'uzziah', start: 50 }, color: 'grape.4', years: 2 },
    // pekah: { relative: { id: 'uzziah', start: 52 }, color: 'grape.4', years: 20 },
    // hoshea: { relative: { id: 'ahaz', start: 12 }, color: 'grape.4', years: 9 },
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

const _notes = `
  SOUTHERN KINGDOM =========================================================

    REHOBOAM ———————————————————————————————————————————————————————————————
      1 Ki 11:43
        Solomon rested with his ancestors and was buried in the city of his father David. His son Rehoboam became king in his place.

      1 Ki 14:21
        Now Rehoboam, Solomon's son, reigned in Judah. Rehoboam was forty-one years old when he became king; he reigned seventeen years in Jerusalem, the city where the Lord had chosen from all the tribes of Israel to put his name

      2 Ch 12:13
        King Rehoboam established his royal power in Jerusalem. Rehoboam was forty-one years old when he became king, and he reigned seventeen years in Jerusalem, the city the Lord had chosen from all the tribes of Israel to put his name. Rehoboam's mother's name was Naamah the Ammonite.

    ABIJAM / ABIJAH ————————————————————————————————————————————————————————
      1 Ki 14:31
        Rehoboam rested with his ancestors and was buried with his ancestors in the city of David. His mother's name was Naamah the Ammonite. His son Abijam, became king in his place.

      1 Ki 15:1-2
        In the eighteenth year of Israel's King Jeroboam son of Nebat, Abijam became king over Judah, 2 and he reigned three years in Jerusalem. His mother's name was Maacah daughter of Abishalom.

      2 Ch 13:1-2
        In the eighteenth year of Israel's King Jeroboam, Abijah became king over Judah, 2 and he reigned three years in Jerusalem. His mother's name was Micaiah, daughter of Uriel; she was from Gibeah. There was war between Abijah and Jeroboam.

    ASA ————————————————————————————————————————————————————————————————————
    JEHOSHAPHAT ————————————————————————————————————————————————————————————
    JEHORAM ————————————————————————————————————————————————————————————————
    AHAZIAH (South) ————————————————————————————————————————————————————————
    ATHALIAH (Queen) ———————————————————————————————————————————————————————
    JOASH ——————————————————————————————————————————————————————————————————
    AMAZIAH ————————————————————————————————————————————————————————————————
    UZZIAH / AZARIAH ———————————————————————————————————————————————————————
    JOTHAM —————————————————————————————————————————————————————————————————
    AHAZ ———————————————————————————————————————————————————————————————————
    HEZEKIAH ———————————————————————————————————————————————————————————————
    MANASSEH ———————————————————————————————————————————————————————————————
    AMON ———————————————————————————————————————————————————————————————————
    JOSIAH —————————————————————————————————————————————————————————————————
    JEHOAHAZ ———————————————————————————————————————————————————————————————
    JEHOIAKIM ——————————————————————————————————————————————————————————————
    JEHOIACHIN —————————————————————————————————————————————————————————————
    ZEDEKIAH ———————————————————————————————————————————————————————————————

  NORTHERN KINGDOM =========================================================

    JEROBOAM (I) ———————————————————————————————————————————————————————————
    NADAB ——————————————————————————————————————————————————————————————————
    BAASHA —————————————————————————————————————————————————————————————————
    ELAH ———————————————————————————————————————————————————————————————————
    ZIMRI ——————————————————————————————————————————————————————————————————
    OMRI ———————————————————————————————————————————————————————————————————
    AHAB ———————————————————————————————————————————————————————————————————
    AHAZIAH (North) ————————————————————————————————————————————————————————
    JORAM ——————————————————————————————————————————————————————————————————
    JEHU ———————————————————————————————————————————————————————————————————
    JEHOAHAZ ———————————————————————————————————————————————————————————————
    JEHOASH ————————————————————————————————————————————————————————————————
    JEROBOAM (II) ——————————————————————————————————————————————————————————
    ZECHARIAH ——————————————————————————————————————————————————————————————
    SHALLUM ————————————————————————————————————————————————————————————————
    MENAHEM ————————————————————————————————————————————————————————————————
    PEKAHIAH ———————————————————————————————————————————————————————————————
    PEKAH ——————————————————————————————————————————————————————————————————
    HOSHEA —————————————————————————————————————————————————————————————————

`;
