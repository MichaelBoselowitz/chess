import DS from 'ember-data';

var Person = DS.Model.extend({
    name: DS.attr('string'),
    wins: DS.attr('number'),
    losses: DS.attr('number')
});

Person.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Michael Boselowitz',
            wins: 5,
            losses: 1
        },
        {
            id: 2,
            name: 'Lori Paul',
            wins: 1,
            losses: 3
        },
        {
            id: 3,
            name: 'Matt Ross',
            wins: 0,
            losses: 2
        }
    ]
});

export default Person;
