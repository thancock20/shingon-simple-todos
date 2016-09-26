import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  const {Tasks} = Collections;

  Meteor.methods({
    'tasks.create'(taskToInsert) {
      check(taskToInsert, Object);

      const task = new Tasks();
      task.create(taskToInsert);
    },

    'tasks.edit'(taskId, updates) {
      check(taskId, String);
      check(updates, Object);

      const task = Tasks.findOne(taskId);
      task.edit(updates);
    },

    'tasks.delete'(taskId) {
      check(taskId, String);

      const task = Tasks.findOne(taskId);
      task.remove();
    }
  });
}
