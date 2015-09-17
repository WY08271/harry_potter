var Book = require('./book');
var Cart = require('./cart');

function DiscountPlan(plan) {
  this.plan = [];
}

DiscountPlan.prototype.group = function(booklist) {
  this.arrays(this.maxCount(booklist));

  for (var i = 0; i < booklist.length; i++) {
    if (booklist[i].count > 1) {
      this.countGroup(booklist[i], booklist[i].count);
    } else {
      this.plan[0].push(booklist[i]);
    }
  }

  return this.plan;
};

DiscountPlan.prototype.arrays = function(max) {
  for (var i = 0; i < max; i++) {
    this.plan[i] = [];
  }
};

DiscountPlan.prototype.countGroup = function(item, length) {
  for (var i = 0; i < length; i++) {
    this.plan[i].push(item);
  }
};

DiscountPlan.prototype.maxCount = function(booklist) {
  var max = booklist[0].count;

  for (var i = 0; i < booklist.length; i++) {
    if (max < booklist[i].count) {
      max = booklist[i].count;
    }
  }

  return max;
};

DiscountPlan.prototype.calculate = function() {
  var discountPrice = 0;
  var discount = 0;

  for (var i = 0; i < this.plan.length; i++) {
    discount = this.selection(this.plan[i].length);
    discountPrice += this.getDiscountPrice(discount, this.plan[i]);
  }

  return discountPrice;
};

DiscountPlan.prototype.getDiscountPrice = function(discount, item) {
  var allcount = 0;

  for (var i = 0; i < item.length; i++) {
    allcount += item[i].price;
  }
  return allcount * discount;
};

DiscountPlan.prototype.selection = function(item) {
  if (item === 2) {
    return 0.95;
  } else if (item === 3) {
    return 0.9;
  } else if (item === 4) {
    return 0.8;
  } else if (item === 5) {
    return 0.75;
  } else if (item === 1) {
    return 1;
  }
};

module.exports = DiscountPlan;
