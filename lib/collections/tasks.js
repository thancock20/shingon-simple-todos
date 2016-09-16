import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const Tasks = new Mongo.Collection('tasks');

const Task = Class.create({
  name: 'Task',
  collection: Tasks,
  fields: {
    _id: String,
    text: String,
    checked: {
      type: Boolean,
      default: false
    },
    owner: String,
    username: String,
    private: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: () => new Date()
    }
  }
});

export default Task;
