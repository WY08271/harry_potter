var Book = require('./book');

function Cart(book, count) {
  this.book = book || new Book();
  this.count = count || 1;
  this.booklist = [];
}

Cart.prototype.getCount = function(input) {
  for (var i = 0; i < input.length; i++) {
    var index = this.findBook(input[i].name);

    if (index) {
      index.count += this.count;
    } else {
      this.booklist.push({
        name: input[i].name,
        price: input[i].price,
        count: this.count
      });
    }
  }
  return this.booklist;
};

Cart.prototype.findBook = function(name) {
  for (var i = 0; i < this.booklist.length; i++) {
    if (this.booklist[i].name === name) {
      return this.booklist[i];
    }
  }
};

module.exports = Cart;
