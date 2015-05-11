import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        createPost () {
            // Creates a reference to our index, so we can
            // capture the values in the #NewPost form
            let model = this.controllerFor('new');

            // Creates a new post record in ember-data's data-store
            let post = this.store.createRecord('post', {
                title: model.get('title'),
                text: model.get('text'),
                author: model.get('author'),
                createdDate: new Date()
            });

            // Save our new record
            post.save().then(() => {
                // Reset the form so that each field is blank
                model.setProperties({
                    title: '',
                    author: '',
                    text: ''
                });
                return this.transitionTo('index');
            });

        }
    }
});
