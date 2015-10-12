var express = require('express');
var books = require('../model/books');

var router = express.Router();

module.exports = router;

var shoppingCart = [];
var totalCost = 0;

router.get("/", function(req, res) {
  res.render(
    'shop/home',
    {
      books: books.all(),
      cart: shoppingCart,
      total: totalCost
    });
});

router.post("/buy", function(req, res) {
  console.log('Buying', req.body.book_id);
  var book = books.find(req.body.book_id);
  shoppingCart.push(book);
  totalCost += book.price;
  res.redirect('/shopping');
});


