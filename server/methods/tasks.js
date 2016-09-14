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
        username: Meteor.users.findOne(this.userId).username,
        private: false
      });
    },

    'tasks.remove'(taskId) {
      const task = Tasks.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Tasks.remove(taskId);
    },

    'tasks.setChecked'(taskId, setChecked) {
      const task = Tasks.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Tasks.update(taskId, { $set: { checked: setChecked } });
    },

    'tasks.setPrivate'(taskId, setToPrivate) {
      const task = Tasks.findOne(taskId);

      // Make sure only the task owner can make a task private
      if (task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Tasks.update(taskId, { $set: { private: setToPrivate } });
    }
  });
}
