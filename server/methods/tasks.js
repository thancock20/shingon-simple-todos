import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'tasks.insert'(text) {
      check(text, String);

      // Make sure the user is logged in before inserting a task
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      const task = new Tasks();
      task.text = text;
      task.owner = this.userId;
      task.username = Meteor.users.findOne(this.userId).username;
      task.save();
    },

    'tasks.remove'(taskId) {
      check(taskId, String);

      const task = Tasks.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      task.remove();
    },

    'tasks.setChecked'(taskId, setChecked) {
      check(taskId, String);
      check(setChecked, Boolean);

      const task = Tasks.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      task.checked = setChecked;
      task.save();
    },

    'tasks.setPrivate'(taskId, setToPrivate) {
      check(taskId, String);
      check(setToPrivate, Boolean);

      const task = Tasks.findOne(taskId);

      // Make sure only the task owner can make a task private
      if (task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      task.private = setToPrivate;
      task.save();
    }
  });
}
