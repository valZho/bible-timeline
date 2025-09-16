const round = (year, places = 2) =>
  // coerce back to number before returning
  Number(
    year
      // rounds to nearest decimal (outputs string)
      .toFixed(places)
      // removes trailing zeroes from decimal
      .replace(/(\.[0-9]+?)0+$/, '$1')
      // remove zero-only decimals
      .replace(/\.0$/, ''),
  );

export default round;
