import DS from 'ember-data';


// make requests namespaced under 'api' to our server
export default DS.ActiveModelAdapter.extend({
	namespace: 'api'
});