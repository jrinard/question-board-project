import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
actions: {
  postFormShow() {
    this.set('addNewPost', true);
  },
  postFormHide() {
    this.set('addNewPost', false);
  },
  savePost1(){
    var params = {
      question: this.get('question'),
      author: this.get('author'),
      note: this.get('note'),
      image: this.get('image')
    };
    this.set('addNewPost', false);
    this.sendAction('savePost2', params);
  }
}

});
