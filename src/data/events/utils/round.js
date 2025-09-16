const round = (year, places = 2) => Number(year.toFixed(places).replace(/\.?0+$/, ''));

export default round;
