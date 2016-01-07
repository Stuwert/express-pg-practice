var knex = require('../db/knex')
var express = require('express');
var router = express.Router();

function books(){
  return knex('books');
}

module.exports = {

  create: function(req, res){
    books().insert({
      author: req.body.author,
      title: req.body.title,
      rating: req.body.rating,
      description: req.body.description
    }, 'id').then(function(result){
      res.redirect('/books');
    })
  },

  read: function(req, res, location){
    books().select().then(function(result){
      res.render('books/index', {books: result})
    })
  },

  readspec: function(req, res, location){
    books().where('id', req.params.id).first().then(function(result){
      res.render('books/' + location, {book: result});
    })
  },

  update: function(req, res){
    books().where('id', req.params.id).update({
      author: req.body.author,
      title: req.body.title,
      rating: req.body.rating,
      description: req.body.description
    }).then(function(result){
      res.redirect('/books/' + req.params.id)
    })
  },
  deletez: function(req, res){
    books().where('id', req.params.id).del().then(function(result){
      res.redirect('/books');
    })
  }


}
