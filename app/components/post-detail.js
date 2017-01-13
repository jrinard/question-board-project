import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post){
      if (confirm('Are your sure you want to delete this entry?')){
        this.sendAction('destroyPost', post);
      }
    },
    destroyResponse(response) {
      this.sendAction('destroyResponse', response);
    }
  }
});
