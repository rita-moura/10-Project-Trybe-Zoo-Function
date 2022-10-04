const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const emplyeesId = employees.find((idEmplyees) => idEmplyees.id === id).responsibleFor[0];

  const animalsId = species.find((animalId) => emplyeesId === animalId.id)
    .residents.reduce((acc, curr) => {
      if (acc.age > curr.age) return acc;
      return curr;
    });

  return Object.values(animalsId);
}

module.exports = getOldestFromFirstSpecies;
