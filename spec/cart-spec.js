'use _strict';

var Cart = require('../src/cart.js');

describe('Cart', function() {
  var cart;
  beforeEach(function() {
    cart = new Cart();
  });

  describe('#getCount()', function() {
    it('can be get number of book', function() {
      var input =[{name : 'harry-potter-one', price : 8.00, count : 1},
                 {name : 'harry-potter-one', price : 8.00, count : 1},
                 {name : 'harry-potter-one', price : 8.00, count : 1}];
      var result = cart.getCount(input);

      expect(result[0].count).toBe(3);
    });
  });

  describe('#findBook()', function() {
    it('can find book exist booklist', function() {
      cart.booklist = [{name : 'harry-potter-one', price : 8.00, count : 1},
                      {name : 'harry-potter-two', price : 8.00, count : 2}];
      var result = cart.findBook('harry-potter-two');

      expect(result).toEqual({name : 'harry-potter-two', price : 8.00, count : 2});
    });
  });
});
