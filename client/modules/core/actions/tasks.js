export default {
  create({Meteor}, text) {
    Meteor.call('tasks.insert', text);
  },

  toggleChecked({Meteor}, taskId, checked) {
    Meteor.call('tasks.setChecked', taskId, !checked);
  },

  togglePrivate({Meteor}, taskId, taskPrivate) {
    Meteor.call('tasks.setPrivate', taskId, !taskPrivate);
  },

  deleteTask({Meteor}, taskId) {
    Meteor.call('tasks.remove', taskId);
  },

  toggleHideCompleted({LocalState}) {
    const hideCompleted = LocalState.get('hideCompleted');
    LocalState.set('hideCompleted', !hideCompleted);
  }
};
