const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((species) => ids.find((specie) => species.id === specie));
}
getSpeciesByIds();

module.exports = getSpeciesByIds;
