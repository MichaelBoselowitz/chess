import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        cancel: function() {
            this.get('model').destroy();
            window.history.back();
        },
        save: function() {
            this.get('model').save();
            this.transitionToRoute('person', this.get('model'));
        }
    }
});
