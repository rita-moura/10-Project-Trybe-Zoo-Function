const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((nameAnimal) => nameAnimal.name === animal)
    .residents.every((ageAnimal) => ageAnimal.age >= age);
}

console.log(getAnimalsOlderThan('lions', 2));

module.exports = getAnimalsOlderThan;
