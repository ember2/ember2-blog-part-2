import Ember from 'ember';

export default Ember.Component.extend({
    summary: function () {
        return this.get('this.attrs.post.value.text').substring(0, 200) + "...";
    }.property('this.attrs.post.value.text'),

    actions: {
        edit () {
            this.set('isEditing', true);
            console.log(this);
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
