var Calculator = require('./calculator');

function harryPotter(input) {
  var calculator = new Calculator();
  var actualMoney = calculator.calculateMoney(input);

  return actualMoney;
}

module.exports = harryPotter;
