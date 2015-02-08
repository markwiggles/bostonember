import Ember from 'ember';

var PresentationsCreateController = Ember.ArrayController.extend({

	needs: 'speaker'

});

export default PresentationsCreateController;