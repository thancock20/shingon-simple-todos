export default {
  create({Collections}, text) {
    Collections.Tasks.insert({
      text,
      checked: false,
      createdAt: new Date(),
    });
  },

  toggleChecked({Collections}, taskId, checked) {
    Collections.Tasks.update(taskId, {
      $set: { checked: !checked}
    });
  },

  deleteTask({Collections}, taskId) {
    Collections.Tasks.remove(taskId);
  }
};
