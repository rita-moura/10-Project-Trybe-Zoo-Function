const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const verifyAge = entrants.map(({ age }) => age);
  let child = 0;
  let adult = 0;
  let senior = 0;
  verifyAge.forEach((element) => {
    if (element < 18) child += 1;
    if (element >= 18 && element < 50) adult += 1;
    if (element >= 50) senior += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const objecto = Object.values(countEntrants(entrants)).flat(1);
  const child = objecto[0] * prices.child;
  const adult = objecto[1] * prices.adult;
  const senior = objecto[2] * prices.senior;
  const sum = child + adult + senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
