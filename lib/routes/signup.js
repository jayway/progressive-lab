var express = require('express');
var router = express.Router();

var COUNTRIES = 'Sweden Norway Denmark Uruguay'.split(' ');
var CITIES = {
	Sweden : 'Haparanda Lund Malmö Sundsvall Åhus'.split(' '),
	Norway : 'Bergen Holmenkollen Oslo Svalbard'.split(' '),
	Denmark: 'København Helsingør Viborg Ålborg'.split(' '),
	Uruguay: 'Mercedes Montevideo Paysandú Salto'.split(' ')
};

router.get('/', function(req, res) {
	var selectedCountry = req.query.country || '';
	var countries = COUNTRIES.map(function(country)  {
		return { name: country, selected: country==selectedCountry };
	});
	var cities = CITIES[selectedCountry] || [];

	console.log(selectedCountry, cities);
  	res.render('signup/signup', { countries: countries, cities: cities });
});

router.post('/result', function(req, res) {
	res.render('signup/signupresult', { person: req.body });
});

module.exports = router;
