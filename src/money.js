function Money () {

}

Money.prototype.totalMoney = function(booklist){
  var totalMoney = 0;

  for(var i = 0; i < booklist.length; i++){
    totalMoney += booklist[i].price * booklist[i].count;
  }

  return totalMoney;
};

Money.prototype.actualMoney = function(booklist, discountPrice){
  return this.totalMoney(booklist) - discountPrice;
};

module.exports = Money;
