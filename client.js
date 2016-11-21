var app = angular.module('basicApp', []);

app.controller('BasicController', function(){
  console.log('Basic controller loaded');

  var self = this; // holds the value of this

  self.cohorts = [];

  self.person = {
    name: 'Luke',
    hairColor: 'Blond'
  };

  self.createCohort = function(){
    self.cohorts.push(angular.copy(self.cohort));
    console.log('Submitted cohort ', self.cohorts);
  };

});
