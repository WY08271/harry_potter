'use _strict';

var harryPotter = require('../src/main.js');
var Book = require('../src/book');

describe('harryPotter', function() {
  it('can calculate correct discount price', function(){
    var input = [
      new Book('harry-potter-one',8.00),
      new Book('harry-potter-one',8.00),
      new Book('harry-potter-two',8.00),
      new Book('harry-potter-two',8.00),
      new Book('harry-potter-three',8.00),
      new Book('harry-potter-three',8.00),
      new Book('harry-potter-four',8.00),
      new Book('harry-potter-five',8.00)];
    var result = harryPotter(input);

    expect(result).toBe(51.60);
  });
});
