import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.resource('game', function() {
        this.route('new');
    });
    this.resource('person', { path: '/person/:person_id' }, function() {});
});

export default Router;
