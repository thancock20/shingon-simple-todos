import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Tasks = new Mongo.Collection('tasks');
let schema = new SimpleSchema({
  _id: {
    type: String
  },
  text: {
    type: String
  },
  createdAt: {
    type: Date
  }
});
Tasks.attachSchema(schema);

export default Tasks;
