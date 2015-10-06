var express = require('express');
var router = express.Router();
var Users = require('../model/users.js');


router.get('/', function(req, res) {
  res.render('search', {title: 'Search'});
});

router.post('/result', function(req, res) {
  var query = req.body.name;
  res.render('searchresult', {
    people: Users.search(query)
  });
});

module.exports = router;
