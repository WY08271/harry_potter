'use _strict';

var DiscountPlan = require('../src/discountPlan');

describe('DiscountPlan', function() {
  var discountPlan;
  beforeEach(function() {
    discountPlan = new DiscountPlan();
  });

  describe('#group()', function() {
    it('to book group', function() {
      var booklist = [{name : 'harry-potter-one', price : 8.00, count : 1},
                      {name : 'harry-potter-two', price : 8.00, count : 2}];
      var result = discountPlan.group(booklist);
      var expectResult = [[{name : 'harry-potter-one', price : 8.00, count : 1},
                      {name : 'harry-potter-two', price : 8.00, count : 2}],
                      [{name : 'harry-potter-two', price : 8.00, count : 2}]];

      expect(result).toEqual(expectResult);
    });
  });

  describe('#calculate()', function() {
    it('can calculate the discount of books', function() {
      var booklist = [{name : 'harry-potter-one', price : 8.00, count : 1},
                      {name : 'harry-potter-two', price : 8.00, count : 2}];
      discountPlan.group(booklist);
      
      expect(discountPlan.calculate()).toBe(0.8);
    });
  });
});
