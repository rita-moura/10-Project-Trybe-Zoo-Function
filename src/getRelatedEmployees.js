const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.some((verifyId) => verifyId === id));
}
isManager();

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
getRelatedEmployees();

module.exports = { isManager, getRelatedEmployees };
