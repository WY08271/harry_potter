var Cart = require('./cart');
var Calculator = require('./calculator');
var DiscountPlan = require('./discountPlan');

function harryPotter(input) {
  var cart = new Cart();
  var booklist = cart.getCount(input);

  var discountPlan = new DiscountPlan();
  var plan = discountPlan.group(booklist);

  var discountPrice = discountPlan.calculate();
  var calculator = new Calculator();
  var actualMoney = calculator.actualMoney(booklist, discountPrice);

  return actualMoney;
}

module.exports = harryPotter;
