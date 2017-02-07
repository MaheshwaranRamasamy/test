import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findAll('user').
        then(orders => orders.sortBy('lname'));
    },
    setupController(controller, model) {
        controller.set('model', model);
        this.transitionTo('users.add');
    }
    
});