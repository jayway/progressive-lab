var express = require('express');
var router = express.Router();
var Users = require('../model/users.js');


router.get('/search', function(req, res) {
  res.render('users/search', {title: 'Search'});
});

router.post('/search', function(req, res) {
  var query = req.body.name;
  res.render('users/searchresult', {
    people: Users.search(query)
  });
});

module.exports = router;
