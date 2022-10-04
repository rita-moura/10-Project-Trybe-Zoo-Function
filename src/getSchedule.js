const data = require('../data/zoo_data');

const { species } = data;

function getSchedule(scheduleTarget) {
  return species.filter((e) => e.name === scheduleTarget);
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
