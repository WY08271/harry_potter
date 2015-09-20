'use _strict';

var DiscountPlan = require('../src/discountPlan');
var Receipt = require('../src/receipt');

describe('Receipt', function() {
  describe('#printReceipt()', function() {
    it('can print booklist and discountPlan ,discount', function() {
      var booklist = [{
        name: 'harry-potter-one',
        price: 8,
        count: 2
      }, {
        name: 'harry-potter-two',
        price: 8,
        count: 2
      }, {
        name: 'harry-potter-three',
        price: 8,
        count: 2
      }, {
        name: 'harry-potter-four',
        price: 8,
        count: 1
      }, {
        name: 'harry-potter-five',
        price: 8,
        count: 1
      }];
      var plan = [
        [{
          name: 'harry-potter-one',
          price: 8,
          count: 2
        }, {
          name: 'harry-potter-two',
          price: 8,
          count: 2
        }, {
          name: 'harry-potter-three',
          price: 8,
          count: 2
        }, {
          name: 'harry-potter-four',
          price: 8,
          count: 1
        }, {
          name: 'harry-potter-five',
          price: 8,
          count: 1
        }],
        [{
          name: 'harry-potter-one',
          price: 8,
          count: 2
        }, {
          name: 'harry-potter-two',
          price: 8,
          count: 2
        }, {
          name: 'harry-potter-three',
          price: 8,
          count: 2
        }]
      ];
      var receipt = new Receipt();
      var string = receipt.printReceipt(booklist, plan);
      var expectResult = '书名    单价    数量\n' + 'harry-potter-one  8  2\n' +
                         'harry-potter-two  8  2\n' + 'harry-potter-three  8  2\n' +
                         'harry-potter-four  8  1\n' + 'harry-potter-five  8  1\n' +
                         '-----------------\n' + '优惠方式:\n' +
                         'harry-potter-one+harry-potter-two+harry-potter-three+harry-potter-four+harry-potter-five+25%\n' +
                         'harry-potter-one+harry-potter-two+harry-potter-three+10%\n';

      expect(string).toEqual(expectResult);
    });
  });
});
