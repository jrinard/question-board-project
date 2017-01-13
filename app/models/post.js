import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  image: DS.attr(),
  responses: DS.hasMany('response', { async: true })
});
