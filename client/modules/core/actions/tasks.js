export default {
  create({Collections}, text) {
    Collections.Tasks.insert({
      text,
      createdAt: new Date(),
    });
  }
};
