var express = require('express');
var path = require('path');
var vCard = new (require('vcard'))();
var router = express.Router();
var fs            = require('fs');

var users = [];

var cardPath = path.join(__dirname, '../data/jayway-people.vcf');
var vCardData = fs.readFileSync(cardPath, 'utf-8');
vCardData.split(/\n(?=BEGIN:VCARD)/g).map(function(vCardPerson, i) {
	vCard.readData(vCardPerson, function(err, json) {
		users.push(json);
	});
});
// console.log(cardPath);
// vCard.readFile(path.join(__dirname, '../data/jayway-people.vcf'), function(err, json) {
// 	console.log(err, json);
// });

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('search');
});

router.post('/result', function(req, res) {
  	res.render('users', users.filter(function(user) {
  		return user.FN.indexOf(req.body.name) >= 0;
  	}));
});

module.exports = router;
