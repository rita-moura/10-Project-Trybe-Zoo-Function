const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const newObject = {};
    species.map(({ name, residents }) => {
      newObject[name] = residents.length;
      return true;
    });
    return newObject;
  }
  const { specie, sex } = animal;
  if (sex) {
    return species.find((nameSpecie) => nameSpecie.name === specie).residents
      .filter((sexSpecie) => sexSpecie.sex === sex).length;
  }
  return species.find(({ name }) => name === specie).residents.length;
}

console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
