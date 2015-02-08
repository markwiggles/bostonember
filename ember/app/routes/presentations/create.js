export
default Ember.Route.extend({


	model: function(params) {
		return this.store.createRecord('presentation', {
			title: '',
			speaker_id: params.speaker_id
		});
	}
});

// actions: {

// 	testfunc: function() {
// 		// var my_model = this.controller.get('model');
// 		// console.log(my_model.speaker_id);
// 		// console.log(my_model.title);
// 	},

// 	create: function() {
// 		var my_model = this.controller.get('model');

// 		var presentation = this.store.createRecord('presentation', {
// 			title: my_model.title,
// 			speaker_id: 10
// 		});

// 		if (my_model.title !== '') {

// 			console.log('presentation: ' + presentation);
// 			presentation.save();
// 			this.transitionTo('presentations.index');
// 			this.set('title', '');
// 			this.set('speaker_id', '');
// 		}
// 	}
// }