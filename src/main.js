var Cart = require('./cart');
var Money = require('./money');
var DiscountPlan = require('./discountPlan');
var Receipt = require('./receipt');

function harryPotter(input) {
  var cart = new Cart();
  var booklist = cart.getCount(input);

  var discountPlan = new DiscountPlan();
  var plan = discountPlan.group(booklist);

  var discountPrice = discountPlan.calculate();
  var money = new Money();
  var actualMoney = money.actualMoney(booklist, discountPrice);
  var receipt = new Receipt();
  var string = receipt.printReceipt(booklist, plan);

  return actualMoney;
}

module.exports = harryPotter;
