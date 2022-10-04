const data = require('../data/zoo_data');

const { species } = data;

function getSchedule(scheduleTarget) {
  const animlsDays = species.find((e) => e.name === scheduleTarget).availability;
  return animlsDays;
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
