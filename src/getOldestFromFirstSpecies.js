const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const emplyeesId = employees.find((idEmplyees) => idEmplyees.id === id).responsibleFor[0];
  // console.log('id do colaborador', emplyeesId);
  const animalsId = species.find((animalId) => emplyeesId === animalId.id)
    .residents.reduce((acc, curr) => {
      if (acc.age > curr.age) return acc;
      return curr;
    });
  // console.log('chave e valor do animal mais velho que o colaborador cuida', animalsId);
  return Object.values(animalsId);
}
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = getOldestFromFirstSpecies;
