import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('game', function() {});
  this.resource('person', function() {});
    this.resource('person', { path: '/person/:person_id' }, function() {});
});

export default Router;
