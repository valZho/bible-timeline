/**
 * applies vertical "tracks" to each event in the supplied array
 * @param {array} events - the date-sorted array of all the events
 * @param {string} trackMin - ['auto', 'all', '{number}', ...] the minimum number of tracks to use
 */
const setTracks = ({ events = [], trackMin = '20' }) => {
  // set vertical tracks on events
  let trackCount = parseInt(trackMin, 10) || 1;
  let tryNext = 0;
  const tracks = Array(trackCount).fill(-500, 0, trackCount);
  const buffer = 200; // right-side pixel buffer before slotting new event on same track

  events.forEach((e, i) => {
    // if trackMin is "all" then every event is just in a sequential track
    if (trackMin === 'all') {
      e.display.track = i;
      return;
    }

    // all other trackMin types will try to reuse tracks
    let infiniteLoopProtection = 0;
    let alreadyRestartedLoop = false;
    for (let t = tryNext; t < trackCount && infiniteLoopProtection < events.length * 2; t++, infiniteLoopProtection++) {
      // if this event fits on this track, add it
      if (tracks[t] + buffer + e.extraBuffer < e.display.left) {
        tryNext = t === trackCount - 1 ? 0 : t + 1;
        tracks[t] = e.display.right;
        e.display.track = t;
        break;
      }

      // is this the last track?
      // have we not already looped over from the beginning?
      // if yes, loop back to the first track and keep trying
      if (t === trackCount - 1 && !alreadyRestartedLoop) {
        alreadyRestartedLoop = true;
        t = -1;
        continue;
      }

      // did we already loop around from the beginning?
      // are we back to where we started?
      // if yes, there's no room, add this to a new track
      if (alreadyRestartedLoop && t === tryNext) {
        e.display.track = trackCount;
        tracks.push(e.display.right);
        tryNext = 0; // loop to start
        trackCount++;
        break;
      }
    }
  });

  // get a final count of tracks actually used
  trackCount = trackMin === 'all' ? events.length : tracks.filter(t => t > 0).length;

  return { events, trackCount };
};

export default setTracks;
