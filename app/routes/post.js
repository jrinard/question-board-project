import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  notes: DS.attr(),
  author: DS.attr(),
  image: DS.attr()
  // answers: DS.hasMany('answer', { async: true })
});
