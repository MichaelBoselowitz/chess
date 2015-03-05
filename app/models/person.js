import DS from 'ember-data';

var Person = DS.Model.extend({
    name: DS.attr('string'),
    games: DS.hasMany('game', {inverse: 'players', async: true}),
    wonGames: DS.hasMany('game', {inverse: 'winner', async: true}),
    wonGamesCount: function() {
        return this.get('wonGames.length');
    }.property('wonGames.length'),
    lostGames: DS.hasMany('game', {inverse: 'loser', async: true}),
    lostGamesCount: function() {
        return this.get('lostGames.length');
    }.property('lostGames.length')
});

Person.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Michael Boselowitz',
            games: [1, 2, 3, 4, 5, 6],
            wonGames: [1, 2, 3, 4, 6],
            lostGames: [5]
        },
        {
            id: 2,
            name: 'Lori Paul',
            games: [1, 3, 4, 5],
            wonGames: [5],
            lostGames: [1, 3, 4]
        },
        {
            id: 3,
            name: 'Matt Ross',
            games: [2, 6],
            wonGamse: [],
            lostGames: [2, 6]
        }
    ]
});

export default Person;
