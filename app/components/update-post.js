import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    updateFormHide() {
      this.set('updatePostForm', false);
    },
    update(post) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        note: this.get('note'),
        image: this.get('image')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
