import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('game', function() {});
  this.resource('person', function() {});
});

export default Router;