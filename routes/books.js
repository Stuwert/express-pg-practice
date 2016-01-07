var express = require('express');
var router = express.Router();

router.get('/books', function(req, res, next) {
  res.render('books/index', {books: results.rows});
});

module.exports = router;
