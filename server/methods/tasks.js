import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.methods({
    'tasks.insert'(text) {
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
      const task = Tasks.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      task.remove();
    },

    'tasks.setChecked'(taskId, setChecked) {
      const task = Tasks.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      task.checked = setChecked;
      task.save();
    },

    'tasks.setPrivate'(taskId, setToPrivate) {
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
