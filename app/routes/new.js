import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        createPost () {
            // Creates a reference to our index, so we can
            // capture the values in the #NewPost form
            let index = this.controllerFor('new');

            // Creates a new post record in ember-data's data-store
            let post = this.store.createRecord('post', {
                title: index.get('title'),
                text: index.get('text'),
                author: index.get('author'),
                createdDate: new Date()
            });

            // Save our new record
            post.save().then(() => {
                // Reset the form so that each field is blank
                index.setProperties({
                    title: '',
                    author: '',
                    text: ''
                });
                return this.transitionTo('index');
            });

        }
    }
});
