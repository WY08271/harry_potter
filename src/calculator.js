var Cart = require('./cart');
var DiscountPlan = require('./discountPlan');

function Calculator () {

}

Calculator.prototype.totalMoney = function(booklist){
  var totalMoney = 0;

  for(var i = 0; i < booklist.length; i++){
    totalMoney += booklist[i].price * booklist[i].count;
  }

  return totalMoney;
};

Calculator.prototype.actualMoney = function(booklist, discountPrice){
  return this.totalMoney(booklist) - discountPrice;
};

Calculator.prototype.calculateMoney = function(input){
  var cart = new Cart();
  var booklist = cart.getCount(input);

  var discountPlan = new DiscountPlan();
  var plan = discountPlan.group(booklist);
  var discountPrice = discountPlan.calculate();
  var actualMoney = this.actualMoney(booklist, discountPrice);

  return actualMoney;
};

module.exports = Calculator;
