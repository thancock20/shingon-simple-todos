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
  checked: {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  owner: {
    type: String
  },
  username: {
    type: String
  }
});
Tasks.attachSchema(schema);

export default Tasks;
