'use _strict';

var Money = require('../src/money.js');

describe('Money', function() {
  var money;
  beforeEach(function() {
    money = new Money();
  });

  describe('#totalMoney()', function() {
    it('can calculate no discount price', function() {
      var input = [{
        name: 'harry-potter-one',
        price: 8.00,
        count: 1
      }, {
        name: 'harry-potter-one',
        price: 8.00,
        count: 1
      }, {
        name: 'harry-potter-one',
        price: 8.00,
        count: 1
      }];

      expect(money.totalMoney(input)).toBe(24);
    });
  });

  describe('#actualMoney()', function() {
    it('can calculate have discount price', function() {
      var input = [{
        name: 'harry-potter-one',
        price: 8.00,
        count: 1
      }, {
        name: 'harry-potter-one',
        price: 8.00,
        count: 1
      }, {
        name: 'harry-potter-one',
        price: 8.00,
        count: 1
      }];
      var totalMoney = money.totalMoney(input);

      expect(money.actualMoney(input, 10)).toBe(14);
    });
  });
});
