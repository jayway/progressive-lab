var path = require('path');
var fs = require('fs');
var vCardParser = require('vcard');


var Users = (function() {
  var users = [];
  fillWithUsers(users);

  return {
    search: function(query) {
      var queryRegExp = new RegExp(query, 'ig');
      return users.filter(function(user) {
        return user.FN.search(queryRegExp) >= 0;
      });
    }
  };

})();

function fillWithUsers(userArray) {
  var cardPath = path.join(__dirname, 'jayway-people.vcf');
  var cardData = fs.readFileSync(cardPath, 'utf-8');
  var parser = new vCardParser();
  cardData
    .split(/\n(?=BEGIN:VCARD)/g)
    .forEach(function(vCard) {
      parser.readData(vCard, function(err, json) {
        if (!err)
          userArray.push(json);
      });
    });
}

module.exports = Users;
