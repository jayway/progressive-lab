var express = require('express');
var router = express.Router();
var groups = require('../model/groups.js');
var users = require('../model/users.js');

router.get('/', function(req, res) {
  res.render('groups', { groups: groups.all() });
});

router.get('/edit/:id', function(req, res) {
  res.render('editgroup', {
    group: groups.get(req.params.id),
    users: users.search('').map( function(user) { return user.FN; } )
  });
});

router.post('/edit/:id', function(req, res) {
  var group = groups.get(req.params.id);
  group.addMember(req.body.name);

  res.render('editgroup', {
    group: group,
    users: users.search('').map(function(user) { return user.FN; })
  });
});

router.get('/adduser', function(req, res) {
  res.render('adduser');
});

router.post('/adduser', function(req, res) {
  var fullname = req.body.fullname;
  var email = req.body.email;
  users.add(fullname, email);
  res.render('adduser');
});

module.exports = router;
