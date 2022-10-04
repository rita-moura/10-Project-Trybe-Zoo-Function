const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.reduce((acc, curr) => {
    if (curr.firstName === employeeName || curr.lastName === employeeName) {
      return curr;
    } return acc;
  }, {});
}
getEmployeeByName();

module.exports = getEmployeeByName;
