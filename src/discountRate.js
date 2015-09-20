function DiscountRate() {

}

DiscountRate.prototype.rate = function() {
  return {
    TYPE_ONE: 0,
    TYPE_TWO: 0.05,
    TYPE_THREE: 0.10,
    TYPE_FOUR: 0.20,
    TYPE_FIVE: 0.25
  };
};

DiscountRate.prototype.findRate = function(discountName){
  return this.rate()[discountName];
};

module.exports = DiscountRate;
