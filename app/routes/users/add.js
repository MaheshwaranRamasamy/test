import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('user');
	},
	setupController(controller, model) {
        controller.set('model', model);
    },
    actions : {
    	submitContact(model) {
    		let self = this;
    		model.save().then(function(result){
				self.send('flashMessage', 'User', 'User added successfully. ', 'success');
				let route = self.container.lookup("route:users"); // use the name of route you want to refresh
     			route.refresh();
    			self.refresh();
    		}).catch(
                (reason) => this.send('flashMessage', 'User', reason, 'error')
            );
        },
    }
});
