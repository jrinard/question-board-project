import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    responseFormHide() {
      this.set('addNewResponse', false);
    },
    saveResponse() {
     var params = {
       answer: this.get('answer'),
       author: this.get('author'),
       post: this.get('post')
     };
     this.set('addNewResponse', false);
     this.sendAction('saveResponse', params);
   }
  }
});
