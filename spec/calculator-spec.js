'use _strict';

var Calculator = require('../src/calculator.js');
var Book = require('../src/book');

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

  describe('#calculateMoney',function(){
    it('input books and get discount price', function() {
      var input = [
        new Book('harry-potter-one', 8.00),
        new Book('harry-potter-one', 8.00),
        new Book('harry-potter-two', 8.00),
        new Book('harry-potter-two', 8.00),
        new Book('harry-potter-three', 8.00),
        new Book('harry-potter-three', 8.00),
        new Book('harry-potter-four', 8.00),
        new Book('harry-potter-five', 8.00)
      ];

      expect(calculator.calculateMoney(input)).toBe(51.60);
    });
  });
});
