var DiscountPlan = require('./discountPlan');

function Receipt () {

}

Receipt.prototype.printReceipt = function (booklist, plan){
  var string = '书名    ' + '单价    ' + '数量   ' + '\n';
  for(var i = 0; i < booklist.length; i++){
    string += booklist[i].name + '  ' +
              booklist[i].price + '  ' +
              booklist[i].count + '\n';
  }

  var discountPlan = new DiscountPlan();
  string += '-----------------' + '\n' + '优惠方式:\n';
  for(var k = 0; k < plan.length; k++){
    for(var x = 0; x < plan[k].length; x++){
      string += plan[k][x].name + '+';
    }
    string += (discountPlan.selection(plan[k].length) * 100) + '%' + '\n';
  }
  return string;
};

module.exports = Receipt;
