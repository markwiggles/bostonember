export
default Ember.Route.extend({

	model: function() {
		return this.store.createRecord('speaker', {
			name: ''
		});
	},

	actions: {
		create: function() {
			var my_model = this.controller.get('model');
			if (my_model.get('name') !== '') {
				my_model.save();
				this.transitionTo('speakers.show', my_model);
			}
		}
	}
});