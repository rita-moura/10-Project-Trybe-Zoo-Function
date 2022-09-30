const data = require('../data/zoo_data');

// coloquei um id como parametro retorna [especies]
// função deve poder receber varios parametros
// retornar um array
// retornar um array vazio se não receber nenhum id
// buscar a chave species
// dentro desse array deve ter os animais da mesma especie

function getSpeciesByIds(...ids) {
  return ids.map(({ species }) => console.log(species));
}
getSpeciesByIds(data);

console.log(data);

module.exports = getSpeciesByIds;
