var nextGroupId = 1;
function Group(name) {
    this.name = name;
    this.id = nextGroupId++;
    this.members = [];
    this.addMember = function(member) {
        this.members.push(member);
        return this;
    };
}

var Groups = [
    new Group('Peddlers').
      addMember('Pär Singursong').
      addMember('Nikolaus Jönsson').
      addMember('Feelip Korn'),

    new Group('Intorneters').
      addMember('Gustaf Netson-Koder').
      addMember('Åskar Withstream')
];

module.exports = {
  all: function() {
    return Groups;
  },
  get: function(id) {
    return Groups.filter(function(group) { return group.id == id; })[0];
  },
  create: function(name) {
    var group = new Group(name);
    Groups.push(group);
    return group;
  }
};
