import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // Fetches all post records from the store
    return this.store.findAll('post');
  }
});
