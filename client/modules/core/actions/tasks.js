export default {
  create({Meteor, LocalState}, text) {
    Meteor.call('tasks.create', {text});
    LocalState.set('taskInput', '');
  },

  setInput({LocalState}, text) {
    LocalState.set('taskInput', text);
  },

  toggleChecked({Meteor}, taskId, checked) {
    Meteor.call('tasks.update', taskId, {checked: !checked });
  },

  togglePrivate({Meteor}, taskId, taskPrivate) {
    Meteor.call('tasks.update', taskId, {private: !taskPrivate});
  },

  deleteTask({Meteor}, taskId) {
    Meteor.call('tasks.delete', taskId);
  },

  toggleHideCompleted({LocalState}) {
    const hideCompleted = LocalState.get('hideCompleted');
    LocalState.set('hideCompleted', !hideCompleted);
  }
};
