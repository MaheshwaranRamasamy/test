import Ember from 'ember';

export default Ember.Component.extend({
    didReceiveAttrs: function() {
        let obj = this.get('flashMsgArray').get('firstObject');
        Ember.run.schedule('afterRender', this, function() {
            Ember.$.notify(obj.get('message'), obj.get('type'));
        });
        this.get('flashMsgArray').shiftObject();
    },

});