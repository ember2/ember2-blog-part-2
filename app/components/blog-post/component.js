import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        edit () {
            this.set('isEditing', true);
        },
        rollback (post) {
            post.rollback();
            this.set('isEditing', false);
        },
        updatePost (post) {
            this.set('post.updatedDate',new Date());
            post.save().then(() => {
                this.set('isEditing', false);
            });

        }
    }
});
