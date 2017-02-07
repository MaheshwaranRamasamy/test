import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    fname: attr('string'),
    lname: attr('string'),
    email: attr('string'),
    isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
    isFnameValid: Ember.computed.lte('fname.length', 50),
    isLnameValid: Ember.computed.lte('lname.length', 50),
    isValid: Ember.computed.and('isEmailValid', 'isFnameValid','isLnameValid'),
    isDisabled: Ember.computed.not('isValid')
});