var express = require('express');
var router = express.Router();
var controller = require('../controller/codes')


router.get('/books', function(req, res, next) {
  controller.read(req, res);
});

router.get('/book/new', function(req, res, next){
  res.render('books/new')
})

router.post('/book', function(req, res, next){
  controller.create(req, res)
})

router.get('/books/:id', function(req, res, next){
  controller.readspec(req, res, 'show');
})

router.get('/books/edit/:id', function(req, res, next){
  controller.readspec(req, res, 'edit')
})

router.post('/books/:id', function(req, res, next){
  if (req.body.input === "Delete"){
    controller.deletez(req, res);
  }else{
    controller.update(req, res);
  }
})

module.exports = router;
