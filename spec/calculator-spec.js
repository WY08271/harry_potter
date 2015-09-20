'use _strict';

var Calculator = require('../src/calculator.js');

describe('Calculator', function() {
  var calculator;
  beforeEach(function() {
    calculator = new Calculator();
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

      expect(calculator.totalMoney(input)).toBe(24);
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
      var totalMoney = calculator.totalMoney(input);

      expect(calculator.actualMoney(input, 10)).toBe(14);
    });
  });
});
