import Ember from 'ember';

export default Ember.Controller.extend({
    selectedWhitePlayer: null,
    possibleWhitePlayers: function() {
        var blackPlayer = this.get('selectedBlackPlayer');
        return this.get('model').rejectBy('id', blackPlayer);
    }.property('model', 'selectedBlackPlayer'),
    selectedBlackPlayer: null,
    possibleBlackPlayers: function() {
        var whitePlayer = this.get('selectedWhitePlayer');
        return this.get('model').rejectBy('id', whitePlayer);
    }.property('model', 'selectedWhitePlayer')
});
