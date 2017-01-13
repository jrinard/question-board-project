import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },
  actions:{
    update(post, params){
      Object.keys(params).forEach(function (key){
        if (params[key] !== undefined){
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post){
      var response_deletions = post.get('responses').map(function(response){
        return response.destroyRecord();
      });
      Ember.RSVP.all(response_deletions).then(function(){
        return post.destroyRecord();
      });
      this.transitionTo('index');
    }
    // ,
  //   saveComment(params) {
  //     var newComment = this.store.createRecord('comment', params);
  //     var post = params.post;
  //     post.get('comments').addObject(newComment);
  //     newComment.save().then(function(){
  //       return post.save();
  //     });
  //     this.transitionTo('post', post);
  //   },
  //   destroyComment(comment) {
  //     comment.destroyRecord(); /// needs to stay record
  //     this.transitionTo('index');
  //   }
  }
});
