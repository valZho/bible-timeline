/**
 * Generate events of the Kingdoms
 * ALL of this timeline is based off of Edwin R. Thiele's timeline
 * @returns {object}
 */
const eventData4 = () => {
  const events = {
    temple1start: { relative: { id: 'exodus', end: 480 }, years: 7, color: 'lime.6', extraBuffer: 200 },
    solomonReign: { relative: { id: 'temple1start', start: -4 }, years: 40, color: 'grape.2', exactEnd: true },
    kingdomDivided: { relative: { id: 'solomonReign', end: 0 }, years: 0, color: 'lime.6', exactStart: true },

    // JUDAH
    rehoboam: { relative: { id: 'solomonReign', end: 0 }, color: 'grape.2', years: 17 },
    abijam: { relative: { id: 'rehoboam', end: 0 }, color: 'grape.2', years: 3 },
    asa: { relative: { id: 'abijam', end: 0 }, color: 'grape.2', years: 41 },
    jehoshaphat: { relative: { id: 'asa', end: -4 }, color: 'grape.2', years: 25 },
    jehoram: { relative: { id: 'jehoshaphat', end: -5 }, color: 'grape.2', years: 8 },
    ahaziahSouth: { relative: { id: 'jehoram', end: 0 }, color: 'grape.2', years: 1 },
    athaliah: { relative: { id: 'ahaziahSouth', end: 0 }, color: 'grape.2', years: 6 },
    joash: { relative: { id: 'athaliah', end: 0 }, color: 'grape.2', years: 40 },
    amaziah: { relative: { id: 'joash', end: 0 }, color: 'grape.2', years: 29 },
    uzziah: { relative: { id: 'jeroboam2', start: 27 }, color: 'grape.2', years: 52 },
    jotham: { relative: { id: 'pekah', start: 2 }, color: 'grape.2', years: 16 },
    ahaz: { relative: { id: 'pekah', start: 17 }, color: 'grape.2', years: 16 },
    hezekiah: { relative: { id: 'hoshea', start: 3 }, color: 'grape.2', years: 29 },
    manasseh: { relative: { id: 'hezekiah', end: -11 }, color: 'grape.2', years: 55 },
    amon: { relative: { id: 'manasseh', end: 0 }, color: 'grape.2', years: 2 },
    josiah: { relative: { id: 'amon', end: 0 }, color: 'grape.2', years: 31 },
    jehoahazSouth: { relative: { id: 'josiah', end: 0 }, color: 'grape.2', years: 0 },
    jehoiakim: { relative: { id: 'jehoahazSouth', end: 0 }, color: 'grape.2', years: 11 },
    jehoiachin: { relative: { id: 'jehoiakim', end: 0 }, color: 'grape.2', years: 0 },
    zedekiah: { relative: { id: 'jehoiachin', end: 0 }, color: 'grape.2', years: 11 },

    // ISRAEL
    jeroboam1: { relative: { id: 'solomonReign', end: 0 }, color: 'grape.7', years: 22 },
    nadab: { relative: { id: 'jeroboam1', end: 0 }, color: 'grape.7', years: 2 },
    baasha: { relative: { id: 'nadab', end: 0 }, color: 'grape.7', years: 24 },
    elah: { relative: { id: 'baasha', end: 0 }, color: 'grape.7', years: 2 },
    zimri: { relative: { id: 'elah', end: 0 }, color: 'grape.7', years: 0 },
    omri: { relative: { id: 'zimri', start: 0 }, color: 'grape.7', years: 12 },
    ahab: { relative: { id: 'omri', end: 0 }, color: 'grape.7', years: 22 },
    ahaziahNorth: { relative: { id: 'ahab', end: 0 }, color: 'grape.7', years: 2 },
    joram: { relative: { id: 'ahaziahNorth', end: 0 }, color: 'grape.7', years: 12 },
    jehu: { relative: { id: 'joram', end: 0 }, color: 'grape.7', years: 28 },
    jehoahazNorth: { relative: { id: 'joash', start: 23 }, color: 'grape.7', years: 17 },
    jehoash: { relative: { id: 'joash', start: 37 }, color: 'grape.7', years: 16 },
    jeroboam2: { relative: { id: 'amaziah', start: 15 }, color: 'grape.7', years: 41 },
    zechariah: { relative: { id: 'jeroboam2', end: 0 }, color: 'grape.7', years: 0.5 },
    shallum: { relative: { id: 'zechariah', end: 0 }, color: 'grape.7', years: 0 },
    menahem: { relative: { id: 'shallum', end: 0 }, color: 'grape.7', years: 10 },
    pekahiah: { relative: { id: 'menahem', end: 0 }, color: 'grape.7', years: 2 },
    pekah: { relative: { id: 'pekahiah', end: 0 }, color: 'grape.7', years: 20 },
    hoshea: { relative: { id: 'pekah', end: 0 }, color: 'grape.7', years: 9 },
  };

  // SPECIAL CASES
  events.saul = { relative: { id: 'saulReign', end: -70 }, years: 70 };
  events.saulReign = { relative: { id: 'davidReign', start: -40 }, years: 40, color: 'grape.2' };

  events.david = { relative: { id: 'davidReign', end: -70.5 }, years: 70.5 };
  events.davidReign = { relative: { id: 'solomonReign', start: -40.5 }, years: 40.5, color: 'grape.2' };

  events.solomon = { relative: { id: 'solomonReign', start: -25 }, years: 65, fuzzyStart: true };

  // no margin of error on these dates
  Object.keys(events).map(key => (events[key].exact = true));

  return events;
};

export default eventData4;

const _notes = `
  SOUTHERN KINGDOM =========================================================

    REHOBOAM ———————————————————————————————————————————————————————————————
      1 Ki 11:43
        Solomon rested with his ancestors and was buried in the city of his father David. His son Rehoboam became king in his place.

      1 Ki 14:21
        Now Rehoboam, Solomon's son, reigned in Judah. Rehoboam was forty-one years old when he became king; HE REIGNED SEVENTEEN YEARS in Jerusalem, the city where the Lord had chosen from all the tribes of Israel to put his name

      2 Ch 12:13
        King Rehoboam established his royal power in Jerusalem. Rehoboam was forty-one years old when he became king, and HE REIGNED SEVENTEEN YEARS in Jerusalem, the city the Lord had chosen from all the tribes of Israel to put his name. Rehoboam's mother's name was Naamah the Ammonite.

    ABIJAM / ABIJAH ————————————————————————————————————————————————————————
      1 Ki 14:31
        Rehoboam rested with his ancestors and was buried with his ancestors in the city of David. His mother's name was Naamah the Ammonite. His son Abijam, became king in his place.

      1 Ki 15:1-2
        IN THE EIGHTEENTH YEAR OF Israel's King JEROBOAM son of Nebat, Abijam became king over Judah, 2 and HE REIGNED THREE YEARS in Jerusalem. His mother's name was Maacah daughter of Abishalom.

      2 Ch 13:1-2
        IN THE EIGHTEENTH YEAR OF Israel's King JEROBOAM, Abijah became king over Judah, 2 and HE REIGNED THREE YEARS in Jerusalem. His mother's name was Micaiah, daughter of Uriel; she was from Gibeah. There was war between Abijah and Jeroboam.

    ASA ————————————————————————————————————————————————————————————————————
      1 Ki 15:8-10
        Abijam rested with his ancestors and was buried in the city of David. His son Asa became king in his place. 9 IN THE TWENTIETH YEAR OF Israel's King JEROBOAM, Asa became king of Judah, 10 and HE REIGNED FORTY-ONE YEARS in Jerusalem. His grandmother's name was Maacah daughter of Abishalom.

    JEHOSHAPHAT ————————————————————————————————————————————————————————————
      1 Ki 15:24
        Then Asa rested with his ancestors and was buried in the city of his ancestor David. His son Jehoshaphat became king in his place.

      1 Ki 22:41-42
        JEHOSHAPHAT son of Asa BECAME KING over Judah IN THE FOURTH YEAR OF Israel's King AHAB. 42 Jehoshaphat was thirty-five years old when he became king; HE REIGNED TWENTY-FIVE YEARS in Jerusalem. His mother's name was Azubah daughter of Shilhi.

    JEHORAM ————————————————————————————————————————————————————————————————
      1 Ki 22:50
        Jehoshaphat rested with his ancestors and was buried with them in the city of his ancestor David. His son Jehoram became king in his place.

      2 Ki 8:16-17
        IN THE FIFTH YEAR OF Israel's King JORAM son of Ahab, JEHORAM, son of Jehoshaphat BECAME KING of Judah, replacing his father., 17 He was thirty-two years old when he became king, and HE REIGNED EIGHT YEARS in Jerusalem.

    AHAZIAH (South) ————————————————————————————————————————————————————————
      2 Ki 9:29
        It was in the eleventh year of Joram son of Ahab that Ahaziah had become king over Judah.

    ATHALIAH (Queen) ———————————————————————————————————————————————————————
      2 Ki 11:1-3
        When Athaliah, Ahaziah's mother, saw that her son was dead, she proceeded to annihilate all the royal heirs. 2 Jehosheba, who was King Jehoram's daughter and Ahaziah's sister, secretly rescued Joash son of Ahaziah from among the king's sons who were being killed and put him and the one who nursed him in a bedroom. So he was hidden from Athaliah and was not killed. 3 Joash was in hiding with her in the LORD's temple six years while Athaliah reigned over the land.

    JOASH ——————————————————————————————————————————————————————————————————
      2 Ki 11:19-20
        They entered the king's palace by way of the guards' gate. Then Joash sat on the throne of the kings. 20 All the people of the land rejoiced, and the city was quiet, for they had put Athaliah to death by the sword in the king's palace.

      2 Ki 12:1
        IN THE SEVENTH YEAR OF JEHU, JOASH BECAME KING, and HE REIGNED FORTY YEARS in Jerusalem. His mother's name was Zibiah; she was from Beer-sheba

    AMAZIAH ————————————————————————————————————————————————————————————————
      2 Ki 12:20-21
        Joash's servants conspired against him and attacked him at Beth-millo on the road that goes down to Silla. 21 It was his servants Jozabad son of Shimeath and Jehozabad son of Shomer who attacked him. He died and they buried him with his ancestors in the city of David, and his son Amaziah became king in his place.

      2 Ki 14:1-2
        IN THE SECOND YEAR OF Israel's King JEHOASH, son of Jehoahaz, AMAZIAH son of Joash BECAME KING of Judah. 2 He was twenty-five years old when he became king, and HE REIGNED TWENTY-NINE YEARS in Jerusalem. His mother's name was Jehoaddan; she was from Jerusalem.

    UZZIAH / AZARIAH ———————————————————————————————————————————————————————
      2 Ki 14:17-21
        Judah's King Amaziah son of Joash lived fifteen years after the death of Israel's King Jehoash son of Jehoahaz. 18 The rest of the events of Amaziah's reign are written in the Historical Record of Judah's Kings. 19 A conspiracy was formed against him in Jerusalem, and he fled to Lachish. However, men were sent after him to Lachish, and they put him to death there. 20 They carried him back on horses, and he was buried in Jerusalem with his ancestors in the city of David.

      2 Ki 15:1-2
        IN THE TWENTY-SEVENTH YEAR OF Israel's King JEROBOAM, AZARIAH, son of Amaziah became king of Judah. 2 He was sixteen years old when he became king, and HE REIGNED FIFTY-TWO YEARS in Jerusalem. His mother's name was Jecoliah; she was from Jerusalem.

    JOTHAM —————————————————————————————————————————————————————————————————
      2 Ki 15:7
        Azariah rested with his ancestors and was buried with his fathers in the city of David. His son Jotham became king in his place.

      2 Ki 15:32-33
        In the second year of Israel's King Pekah son of Remaliah, Jotham son of Uzziah became king of Judah. 33 He was twenty-five years old when he became king, and he reigned sixteen years in Jerusalem. His mother's name was Jerusha daughter of Zadok

    AHAZ ———————————————————————————————————————————————————————————————————
      2 Ki 15:38
        Jotham rested with his ancestors and was buried with his fathers in the city of his ancestor David. His son Ahaz became king in his place.

      2 Ki 16:1-2
        In the seventeenth year of Pekah son of Remaliah, Ahaz son of Jotham became king of Judah. 2 Ahaz was twenty years old when he became king, and he reigned sixteen years in Jerusalem. He did not do what was right in the sight of the LORD his God like his ancestor David

    HEZEKIAH ———————————————————————————————————————————————————————————————
      2 Ki 16:20
        Ahaz rested with his ancestors and was buried with his fathers in the city of David, and his son Hezekiah became king in his place.

      2 Ki 18:1-2
        In the third year of Israel's King Hoshea son of Elah, Hezekiah son of Ahaz became king of Judah. 2 He was twenty-five years old when he became king, and he reigned twenty-nine years in Jerusalem. His mother's name was Abi daughter of Zechariah.

    MANASSEH ———————————————————————————————————————————————————————————————
      2 Ki 20:21
        Hezekiah rested with his ancestors, and his son Manasseh became king in his place.

      2 Ki 21:1
        Manasseh was twelve years old when he became king, and he reigned fifty-five years in Jerusalem. His mother's name was Hephzibah.

    AMON ———————————————————————————————————————————————————————————————————
      2 Ki 21:17-19
        The rest of the events of Manasseh's reign, along with all his accomplishments and the sin that he committed, are written in the Historical Record of Judah's Kings. 18 Manasseh rested with his ancestors and was buried in the garden of his own house, the garden of Uzza. His son Amon became king in his place. Amon was twenty-two years old when he became king, and he reigned two years in Jerusalem. His mother's name was Meshullemeth daughter of Haruz; she was from Jotbah.

    JOSIAH —————————————————————————————————————————————————————————————————
      2 Ki 21:25-26
        The rest of the events of Amon's reign, along with his accomplishments, are written in the Historical Record of Judah's Kings. 26 He was buried in his tomb in the garden of Uzza, and his son Josiah became king in his place.

      2 Ki 22:1
        Josiah was eight years old when he became king, and he reigned thirty-one years in Jerusalem. His mother's name was Jedidah the daughter of Adaiah; she was from Bozkath.

    JEHOAHAZ (South) ———————————————————————————————————————————————————————
      2 Ki 23:28-31
        The rest of the events of Josiah's reign, along with all his accomplishments, are written in the Historical Record of Judah's Kings. 29 During his reign, Pharaoh Neco king of Egypt marched up to help the king of Assyria at the Euphrates River. King Josiah went to confront him, and at Megiddo when Neco saw him he killed him. 30 From Megiddo his servants carried his dead body in a chariot, brought him into Jerusalem, and buried him in his own tomb. Then the common people took Jehoahaz son of Josiah, anointed him, and made him king in place of his father. 31 Jehoahaz was twenty-three years old when he became king, and he reigned three months in Jerusalem. His mother's name was Hamutal daughter of Jeremiah; she was from Libnah.

    JEHOIAKIM ——————————————————————————————————————————————————————————————
      2 Ki 23:31-36
        Jehoahaz was twenty-three years old when he became king, and he reigned three months in Jerusalem. His mother's name was Hamutal daughter of Jeremiah; she was from Libnah. 32 He did what was evil in the LORD's sight just as his ancestors had done. 33 Pharaoh Neco imprisoned him at Riblah in the land of Hamath to keep him from reigning in Jerusalem, and he imposed on the land a fine of seventy-five hundred pounds of silver and seventy-five pounds of gold. 34 Then Pharaoh Neco made Eliakim son of Josiah king in place of his father Josiah and changed Eliakim's name to Jehoiakim. But Neco took Jehoahaz and went to Egypt, and he died there. 35 So Jehoiakim gave the silver and the gold to Pharaoh, but at Pharaoh's command he taxed the land to give it. He exacted the silver and the gold from the common people, each according to his assessment, to give it to Pharaoh Neco. 36 Jehoiakim was twenty-five years old when he became king, and he reigned eleven years in Jerusalem. His mother's name was Zebidah daughter of Pedaiah; she was from Rumah.

    JEHOIACHIN —————————————————————————————————————————————————————————————
      2 Ki 24:6
        Jehoiakim rested with his ancestors, and his son Jehoiachin became king in his place.

      2 Ki 24:8
        Jehoiachin was eighteen years old when he became king, and he reigned three months in Jerusalem. His mother's name was Nehushta daughter of Elnathan; she was from Jerusalem.

    ZEDEKIAH ———————————————————————————————————————————————————————————————
      2 Ki 24:15-18
        Nebuchadnezzar deported Jehoiachin to Babylon. He took the king's mother, the king's wives, his officials, and the leading men of the land into exile from Jerusalem to Babylon. 16 The king of Babylon brought captive into Babylon all seven thousand of the best soldiers and one thousand craftsmen and metalsmiths—all strong and fit for war. 17 And the king of Babylon made Mattaniah, Jehoiachin's uncle, king in his place and changed his name to Zedekiah. Zedekiah was twenty-one years old when he became king, and he reigned eleven years in Jerusalem. His mother's name was Hamutal daughter of Jeremiah; she was from Libnah


  NORTHERN KINGDOM =========================================================

    JEROBOAM (I) ———————————————————————————————————————————————————————————
      1 Ki 14:20
        The length of JEROBOAM'S REIGN WAS TWENTY-TWO YEARS. He rested with his ancestors, and his son Nadab became king in his place.

    NADAB ——————————————————————————————————————————————————————————————————
      1 Ki 15:25
        Nadab son of JEROBOAM BECAME KING over Israel IN THE SECOND YEAR OF Judah's King ASA; HE REIGNED over Israel TWO YEARS.

    BAASHA —————————————————————————————————————————————————————————————————
      1 Ki 15:33
        IN THE THIRD YEAR OF Judah's King ASA, BAASHA son of Ahijah BECAME KING over all Israel, and HE REIGNED in Tirzah TWENTY-FOUR YEARS.

    ELAH ———————————————————————————————————————————————————————————————————
      1 Ki 16:8
        IN THE TWENTY-SIXTH YEAR OF Judah's King ASA, ELAH son of Baasha BECAME KING over Israel, and HE REIGNED in Tirzah TWO YEARS.

    ZIMRI ——————————————————————————————————————————————————————————————————
      1 Ki 16:10
        IN THE TWENTY-SEVENTH YEAR OF Judah's King ASA, ZIMRI went in and struck Elah down, killing him. Then Zimri became king in his place.

      1 Ki 16:15-19
        IN THE TWENTY-SEVENTH YEAR OF Judah's King ASA, ZIMRI BECAME KING FOR SEVEN DAYS in Tirzah. Now the troops were encamped against Gibbethon of the Philistines. 16 When these troops heard that Zimri had not only conspired but had also struck down the king, then all Israel made Omri, the army commander, king over Israel that very day in the camp. 17 Omri along with all Israel marched up from Gibbethon and besieged Tirzah. 18 When Zimri saw that the city was captured, he entered the citadel of the royal palace and burned it down over himself. He died 19 because of the sin he committed by doing what was evil in the LORD's sight and by walking in the ways of Jeroboam and the sin he caused Israel to commit.


    TIBNI ———————————————————————————————————————————————————————————————————
      1 Ki 16:21-22
        At that time (SEE ZIMRI ABOVE) the people of Israel were divided: half the people followed Tibni son of Ginath, to make him king, and half followed Omri. 22 However, the people who followed Omri proved stronger than those who followed Tibni son of Ginath. So Tibni died and Omri became king.

    OMRI ———————————————————————————————————————————————————————————————————
      1 Ki 16:23
        IN THE THIRTY-FIRST YEAR OF Judah's King ASA, OMRI BECAME KING over Israel, and he REIGNED TWELVE YEARS. He reigned six years in Tirzah
        -- 12 years is his total reign, but the start date is when Tibni died and he become sole ruler — so 6 years PRIOR to ASA's 31st year

    AHAB ———————————————————————————————————————————————————————————————————
      1 Ki 16:28-29
        Omri rested with his ancestors and was buried in Samaria. His son Ahab became king in his place. 29 Ahab son of Omri became king over Israel in THE THIRTY-EIGHTH YEAR OF Judah's King ASA; Ahab son of Omri REIGNED over Israel in Samaria TWENTY-TWO YEARS.

    AHAZIAH (North) ————————————————————————————————————————————————————————
      1 Ki 22:51
        AHAZIAH son of Ahab BECAME KING over Israel in Samaria IN THE SEVENTEENTH YEAR of Judah's King JEHOSHAPHAT, and HE REIGNED over Israel TWO YEARS.

      2 Ki 1:17-18
        Ahaziah died according to the word of the LORD that Elijah had spoken. Since he had no son, Joram, became king in his place. This happened in the second year of Judah's King Jehoram son of Jehoshaphat. 18 The rest of the events of Ahaziah's reign, along with his accomplishments, are written in the Historical Record of Israel's Kings.

    JORAM ——————————————————————————————————————————————————————————————————
      2 Ki 3:1
        JORAM son of Ahab BECAME KING over Israel in Samaria DURING THE EIGHTEENTH YEAR OF Judah's King JEHOSHAPHAT, and HE REIGNED TWELVE YEARS.

    JEHU ———————————————————————————————————————————————————————————————————
      2 Ki 9:1-15
        The prophet Elisha called one of the sons of the prophets and said, “Tuck your mantle under your belt, take this flask of oil with you, and go to Ramoth-gilead. 2 When you get there, look for Jehu son of Jehoshaphat, son of Nimshi. Go in, get him away from his colleagues, and take him to an inner room. 3 Then take the flask of oil, pour it on his head, and say, 'This is what the LORD says: “I anoint you king over Israel.” ' Open the door and escape. Don't wait.” 4 So the young prophet went to Ramoth-gilead. 5 When he arrived, the army commanders were sitting there, so he said, “I have a message for you, commander.” Jehu asked, “For which one of us?” He answered, “For you, commander.” 6 So Jehu got up and went into the house. The young prophet poured the oil on his head and said, “This is what the LORD God of Israel says: 'I anoint you king over the LORD's people, Israel. 7 You are to strike down the house of your master Ahab so that I may avenge the blood shed by the hand of Jezebel—the blood of my servants the prophets and of all the servants of the LORD. 8 The whole house of Ahab will perish, and I will wipe out all of Ahab's males, both slave and free, in Israel. 9 I will make the house of Ahab like the house of Jeroboam son of Nebat and like the house of Baasha son of Ahijah. 10 The dogs will eat Jezebel in the plot of land at Jezreel—no one will bury her.' ” Then the young prophet opened the door and escaped. 11 When Jehu came out to his master's servants, they asked, “Is everything all right? Why did this crazy person come to you?” Then he said to them, “You know the sort and their ranting.” 12 But they replied, “That's a lie! Tell us!” So Jehu said, “He talked to me about this and that and said, 'This is what the LORD says: I anoint you king over Israel.'” 13 Each man quickly took his garment and put it under Jehu on the bare steps., They blew the trumpet and proclaimed, “Jehu is king!” 14 Then Jehu son of Jehoshaphat, son of Nimshi, conspired against Joram. Joram and all Israel had been at Ramoth-gilead on guard against King Hazael of Aram. 15 But King Joram had returned to Jezreel to recover from the wounds that the Arameans had inflicted on him when he fought against Aram's King Hazael. Jehu said, “If you commanders wish to make me king, then don't let anyone escape from the city to go tell about it in Jezreel.”

      2 Ki 10:35-36
        Jehu rested with his ancestors and was buried in Samaria. His son Jehoahaz became king in his place. 36 The length of Jehu's reign over Israel in Samaria was twenty-eight years.

    JEHOAHAZ (North) ———————————————————————————————————————————————————————
      2 Ki 13:1
        IN THE TWENTY-THIRD YEAR OF Judah's King JOASH son of Ahaziah, JEHOAHAZ son of Jehu BECAME KING over Israel in Samaria, and he REIGNED SEVENTEEN YEARS.

    JEHOASH ————————————————————————————————————————————————————————————————
      2 Ki 13:10
        IN THE THIRTY-SEVENTH YEAR OF Judah's King JOASH, JEHOASH son of Jehoahaz BECAME KING over Israel in Samaria, and HE REIGNED SIXTEEN YEARS.

    JEROBOAM (II) ——————————————————————————————————————————————————————————
      2 Ki 14:23
        IN THE FIFTEENTH YEAR OF Judah's King AMAZIAH son of Joash, JEROBOAM son of Jehoash BECAME KING of Israel in Samaria, and he REIGNED FORTY-ONE YEARS.

    ZECHARIAH ——————————————————————————————————————————————————————————————
      2 Ki 15:8
        IN THE THIRTY-EIGHTH YEAR OF Judah's King AZARIAH, ZECHARIAH son of Jeroboam REIGNED over Israel in Samaria FOR SIX MONTHS.

    SHALLUM ————————————————————————————————————————————————————————————————
      2 Ki 15:13
        In the thirty-ninth year of Judah's King Uzziah, Shallum son of Jabesh became king; he reigned in Samaria a full month.

    MENAHEM ————————————————————————————————————————————————————————————————


    PEKAHIAH ———————————————————————————————————————————————————————————————


    PEKAH ——————————————————————————————————————————————————————————————————


    HOSHEA —————————————————————————————————————————————————————————————————


`;
