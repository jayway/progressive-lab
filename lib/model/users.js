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
    },
    add: function(name, email) {
      users.push({
        FN: name,
        EMAIL: email
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
    .forEach(function(vCard, i) {
      parser.readData(vCard, function(err, user) {
        if (!err) {
          userArray.push(user);
        }
      });
    });
}

module.exports = Users;
