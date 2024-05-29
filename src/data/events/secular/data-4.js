// WARS
const eventData3 = () => {
  const events = {
    rome_augustus: { startCE: -27, end: 14 }, // +1 for no year zero
    rome_tiberius: { startCE: 14, end: 37 },
    rome_caligula: { startCE: 37, end: 41 },
    rome_claudius: { startCE: 41, end: 54 },
    rome_nero: { startCE: 54, end: 68 },
    rome_vespasian: { startCE: 69, end: 79 },
    rome_constantine1: { startCE: 306, end: 337 },
  };

  Object.keys(events).forEach(key => {
    events[key].exact = true;
    events[key].color = 'gray';
    events[key].years = events[key].end - events[key].startCE;
    delete events[key].end;
  });

  return events;
};

export default eventData3;
