const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// coloquei um id como parametro retorna [especies]
// função deve poder receber varios parametros
// retornar um array
// retornar um array vazio se não receber nenhum id
// buscar a chave species
// dentro desse array deve ter os animais da mesma especie

function getSpeciesByIds(...ids) {
  const arraySpecie = [];
  return data.species.forEach((element) => {
    if (element.id === ids) {
      return arraySpecie.push(species);
    }
  });
}
console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

module.exports = getSpeciesByIds;
