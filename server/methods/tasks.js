import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.methods({
    'tasks.insert'(text) {
      // Make sure the user is logged in before inserting a task
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Tasks.insert({
        text,
        checked: false,
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username
      });
    },

    'tasks.remove'(taskId) {
      Tasks.remove(taskId);
    },

    'tasks.setChecked'(taskId, setChecked) {
      Tasks.update(taskId, { $set: { checked: setChecked } });
    }
  });
}
