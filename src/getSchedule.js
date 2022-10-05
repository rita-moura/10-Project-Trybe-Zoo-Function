const data = require('../data/zoo_data');

const { species, hours } = data;

const keysDays = Object.keys(hours).map((key) => key);
const hoursDays = Object.entries(hours).map((hour) => hour);
const animal = species.map((name) => name.name);

const withoutParameter = () => {
  const object = {};
  hoursDays.forEach((element) => {
    if (element[0] === 'Monday') {
      object[element[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      object[element[0]] = {
        officeHour: `Open from ${element[1].open}am until ${element[1].close}pm`,
        exhibition: species.filter((name) => name.availability
          .includes(element[0])).map((array) => array.name),
      };
    }
  });
  return object;
};

const withParameter = (param) => {
  const object = {};
  if (param === 'Monday') {
    object[param] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    };
  } else if (keysDays.some((day) => day.includes(param))) {
    const openClose = hoursDays.find((element) => element[0] === param);
    object[param] = {
      officeHour: `Open from ${openClose[1].open}am until ${openClose[1].close}pm`,
      exhibition: species.filter((name) => name.availability
        .includes(param)).map((array) => array.name),
    };
  } else {
    return species.find((animals) => animals.name === param).availability.map((array) => array);
  }
  return object;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || !([animal, keysDays]
    .some((arrays) => arrays.includes(scheduleTarget)))) {
    return withoutParameter();
  }
  return withParameter(scheduleTarget);
}
getSchedule();
module.exports = getSchedule;
