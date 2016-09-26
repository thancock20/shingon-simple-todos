import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  const {Task} = Collections;

  Meteor.methods({
    'tasks.create'(taskToInsert) {
      check(taskToInsert, Object);

      const task = new Task();
      task.create(taskToInsert);
    },

    'tasks.edit'(taskId, updates) {
      check(taskId, String);
      check(updates, Object);

      const task = Task.findOne(taskId);
      task.edit(updates);
    },

    'tasks.delete'(taskId) {
      check(taskId, String);

      const task = Task.findOne(taskId);
      task.remove();
    }
  });
}
