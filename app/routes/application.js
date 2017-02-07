import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller, model) {
        this._super(controller, model);
        controller.set('flashArray', this.get('flashArray'));
    },
    actions : {
    	flashMessage: function(title, message, type) {
            this.controllerFor('application').set('flashArray',[]);
            const FlashObject = Ember.Object.extend({
                init: function() {
                    // this.set('className', 'flash-' + this.get('type'));
                }
            });
            var flashMessage = FlashObject.create({
                title: title,
                message: message,
                type: type
            });
            this.controllerFor('application').get('flashArray').pushObject(flashMessage);
        }
    }
});
