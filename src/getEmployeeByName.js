const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.reduce((acc, name) => {
    if (name.firstName === employeeName || name.lastName === employeeName) {
      return name;
    } return acc;
  }, {});
}
getEmployeeByName();

module.exports = getEmployeeByName;
