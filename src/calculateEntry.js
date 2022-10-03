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
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const child = entrants.filter((e) => e.age < 18).length * prices.child;
  const adult = entrants.filter((e) => e.age >= 18 && e.age < 50).length * prices.adult;
  const senior = entrants.filter((e) => e.age >= 50).length * prices.senior;
  const sum = child + adult + senior;
  console.log(sum);
  return sum;
}

calculateEntry();

module.exports = { calculateEntry, countEntrants };
