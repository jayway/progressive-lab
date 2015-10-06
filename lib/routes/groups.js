var express = require('express');
var router = express.Router();
var groups = require('../model/groups.js');
var users = require('../model/users.js');

router.get('/', function(req, res) {
  res.render('groups', { groups: groups.all() });
});

router.get('/:id', function(req, res) {
  res.render('editgroup', {
    group: groups.get(req.params.id),
    users: users.search('').map( function(user) { return user.FN; } )
  });
});

router.post('/:id', function(req, res) {
  var group = groups.get(req.params.id);
  group.addMember(req.body.name);

  res.render('editgroup', {
    group: group,
    users: users.search('').map(function(user) { return user.FN; })
  });
});

module.exports = router;
