import DS from 'ember-data';

//this presentation model is to beloing to the speaker model
// the speaker model will have a 'hasMany' relationship
export default DS.Model.extend({
    title: DS.attr('string'),
    speaker: DS.belongsTo('speaker', {async: true})
});