var express = require('express');
var router = express.Router();
var runQuery = require('../db/connection');
/* GET home page. */
router.get('/books', function(req, res, next) {
  runQuery('SELECT * FROM books', function(results) {
     res.send(results.rows);
   });
});

module.exports = router;
