import DS from 'ember-data';

//this speaker model has a 'hasMany' relationship with presentation model
export default DS.Model.extend({
	name: DS.attr('string'),
	presentations: DS.hasMany('presentation')
});