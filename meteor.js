if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function() {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function() {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  var animals = [{
    name: 'Toto1',
    species: 'rabbit'
  }, {
    name: 'Toto2',
    species: 'cat'
  }, {
    name: 'Toto3',
    species: 'dog'
  }, {
    name: 'Toto4',
    species: 'dog'
  }]

  var names = animals.map((animal) => animal.name)
  console.log(names)
  
  console.log(animals)

  Meteor.startup(function() {
    // code to run on server at startup
  });
}
