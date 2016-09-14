import { Meteor } from 'meteor/meteor';

export default {
  create({Collections}, text) {
    Collections.Tasks.insert({
      text,
      checked: false,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },

  toggleChecked({Collections}, taskId, checked) {
    Collections.Tasks.update(taskId, {
      $set: { checked: !checked}
    });
  },

  deleteTask({Collections}, taskId) {
    Collections.Tasks.remove(taskId);
  },

  toggleHideCompleted({LocalState}) {
    const hideCompleted = LocalState.get('hideCompleted');
    LocalState.set('hideCompleted', !hideCompleted);
  }
};
