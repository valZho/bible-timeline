// WARS
const data = () => {
  const events = {
    rome_kingdom: { startCE: -753, end: -509, color: 'black' },
    rome_republic: { startCE: -509, end: -27, color: 'black' },
    rome_empire: { startCE: -27, end: 395, color: 'black' },
    rome_augustus: { startCE: -27, end: 14 },
    rome_tiberius: { startCE: 14, end: 37 },
    // rome_caligula: { startCE: 37, end: 41 },
    // rome_claudius: { startCE: 41, end: 54 },
    // rome_nero: { startCE: 54, end: 68 },
    // rome_vespasian: { startCE: 69, end: 79 },
    rome_constantine1: { startCE: 306, end: 337 },
  };

  Object.keys(events).forEach(key => {
    events[key].exact = true;
    events[key].color = events[key].color || 'gray.6';
    events[key].years = events[key].end - events[key].startCE;
    delete events[key].end;
  });

  return events;
};

export default data;

// the Roman Kingdom(753–509 BC), Roman Republic(509–27 BC), Roman Empire(27 BC– 395 AD), and the collapse of the Western Roman Empire in the 5th century AD.[1][a]
