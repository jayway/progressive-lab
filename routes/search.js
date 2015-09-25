var express = require('express');
var path = require('path');
var vCard = new (require('vcard'))();
var router = express.Router();
var fs            = require('fs');

var users = [];

var cardPath = path.join(__dirname, '../data/jayway-people.vcf');
var vCardData = fs.readFileSync(cardPath, 'utf-8');

// The vcard library can only parse one vcard at a time, so we
// need to split the data into individual vcards and convert
// them one by one
vCardData.split(/\n(?=BEGIN:VCARD)/g).map(function(vCardPerson, i) {
	vCard.readData(vCardPerson, function(err, json) {
		// Error handling, you say? What can possibly go wrong with this?
		users.push(json);
		console.log(json);
	});
});

router.get('/', function(req, res) {
  res.render('search', {title: 'Search'});
});

router.post('/result', function(req, res) {
	var searchRegExp = new RegExp(req.body.name, 'ig');
	var matchingUsers = users.filter(function(user) {
  		return searchRegExp.test(user.FN);
  	});
  	res.render('searchresult', { people: matchingUsers });
});

module.exports = router;
