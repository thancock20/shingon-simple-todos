export default {
  create({Meteor, LocalState}, text) {
    Meteor.call('tasks.create', {text});
  },

  toggleChecked({Meteor}, taskId, checked) {
    Meteor.call('tasks.edit', taskId, {checked: !checked });
  },

  togglePrivate({Meteor}, taskId, taskPrivate) {
    Meteor.call('tasks.edit', taskId, {private: !taskPrivate});
  },

  deleteTask({Meteor}, taskId) {
    Meteor.call('tasks.delete', taskId);
  },

  toggleHideCompleted({LocalState}) {
    const hideCompleted = LocalState.get('hideCompleted');
    LocalState.set('hideCompleted', !hideCompleted);
  }
};
