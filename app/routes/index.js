import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      // answers: this.store.findAll('answer')
    });
  }
  // ,
  // actions: {
  //   savePost3(params){
  //     var newPost = this.store.createRecord('post', params);
  //     newPost.save();
  //     this.transitionTo('index');
  //   }
  // }
});
