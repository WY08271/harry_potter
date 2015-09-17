var Cart = require('./cart');
var Money = require('./money');
var DiscountPlan = require('./discountPlan');

function harryPotter(input){
  var cart = new Cart();
  var booklist = cart.getCount(input);

  var discountPlan = new DiscountPlan();
  discountPlan.group(booklist);

  var discountPrice = discountPlan.calculate();
  var money = new Money();
  var actualMoney = money.actualMoney(booklist, discountPrice);

  return actualMoney;
}

module.exports = harryPotter;
