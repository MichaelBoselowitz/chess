import DS from 'ember-data';

var Game = DS.Model.extend({
    'start': DS.attr('date'),
    'end': DS.attr('date'),
    'winner': DS.belongsTo('person', {async: true}),
    'loser': DS.belongsTo('person', {async: true}),
    'whitePlayer': DS.belongsTo('person', {async: true}),
    'blackPlayer': DS.belongsTo('person', {async: true}),
    'players': DS.hasMany('person', {inverse: 'games', async: true})
});

Game.reopenClass({
    FIXTURES: [
        {
            id: 1,
            start: new Date(2015, 0, 1, 9, 0, 0),
            end: new Date(2015, 0, 2, 16, 35, 59),
            winner: 1,
            loser: 2,
            whitePlayer: 2,
            blackPlayer: 1,
            players: [1, 2]
        },
        {
            id: 2,
            start: new Date(2015, 0, 12, 17, 23, 35),
            end: new Date(2015, 0, 15, 18, 42, 23),
            winner: 1,
            loser: 3,
            whitePlayer: 3,
            blackPlayer: 1,
            players: [1, 3]
        },
        {
            id: 3,
            start: new Date(2015, 0, 17, 19, 12, 12),
            end: new Date(2015, 0, 19, 16, 35, 59),
            winner: 1,
            loser: 2,
            whitePlayer: 2,
            blackPlayer: 1,
            players: [1, 2]
        },
        {
            id: 4,
            start: new Date(2015, 0, 23, 19, 46, 17),
            end: new Date(2015, 0, 28, 7, 16, 18),
            winner: 1,
            loser: 2,
            whitePlayer: 2,
            blackPlayer: 1,
            players: [1, 2]
        },
        {
            id: 5,
            start: new Date(2015, 1, 1, 12, 2, 17),
            end: new Date(2015, 1, 2, 13, 35, 59),
            winner: 2,
            loser: 1,
            whitePlayer: 2,
            blackPlayer: 1,
            players: [1, 2]
        },
        {
            id: 6,
            start: new Date(2015, 1, 12, 9, 13, 42),
            end: new Date(2015, 1, 14, 8, 35, 12),
            winner: 1,
            loser: 3,
            whitePlayer: 3,
            blackPlayer: 1,
            players: [1, 3]
        }
    ]
});

export default Game;
