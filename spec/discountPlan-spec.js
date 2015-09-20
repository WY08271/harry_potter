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
    it('can calculate the discount of two same books and one book', function() {
      var booklist = [{name : 'harry-potter-one', price : 8.00, count : 1},
                      {name : 'harry-potter-two', price : 8.00, count : 2}];
      discountPlan.group(booklist);

      expect(discountPlan.calculate()).toBe(0.8);
    });

    it('can calculate the discount of one book', function() {
      var booklist = [{name : 'harry-potter-one', price : 8.00, count : 1}];
      discountPlan.group(booklist);

      expect(discountPlan.calculate()).toBe(0);
    });

    it('can calculate the discount of two same books', function() {
      var booklist = [{name : 'harry-potter-one', price : 8.00, count : 2}];
      discountPlan.group(booklist);

      expect(discountPlan.calculate()).toBe(0);
    });

    it('can calculate the discount of two different books', function() {
      var booklist = [{name : 'harry-potter-one', price : 8.00, count : 1},
                      {name : 'harry-potter-two', price : 8.00, count : 1}];
      discountPlan.group(booklist);

      expect(discountPlan.calculate()).toBe(0.8);
    });

    it('can calculate the discount of eight different books', function() {
      var booklist = [{name : 'harry-potter-one', price : 8.00, count : 2},
                      {name : 'harry-potter-two', price : 8.00, count : 2},
                      {name : 'harry-potter-three', price : 8.00, count : 2},
                      {name : 'harry-potter-four', price : 8.00, count : 1},
                      {name : 'harry-potter-five', price : 8.00, count : 1}];
      discountPlan.group(booklist);

      expect(discountPlan.calculate()).toBe(12.4);
    });
  });
});
