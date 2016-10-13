import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from 'meteor/meteor';

const Tasks = new Mongo.Collection('tasks');

const Task = Class.create({
  name: 'Task',
  collection: Tasks,
  fields: {
    _id: {
      type: String,
      immutable: true
    },
    text: {
      type: String,
      immutable: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    owner: {
      type: String,
      immutable: true
    },
    username: {
      type: String,
      transient: true
    },
    private: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: () => new Date(),
      immutable: true
    },
    updatedAt: {
      type: Date,
      default: () => new Date()
    }
  },
  events: {
    afterInit(e) {
      const doc = e.currentTarget;
      doc.username = Boolean(doc.owner) && Meteor.users.findOne(doc.owner).username;
    },
    beforeRemove(e) {
      const doc = e.currentTarget;
      if (!doc.isOwner()) {
        throw new Meteor.Error('not-authorized');
      }
    }
  },
  methods: {
    create(task) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      const {text} = task;
      this.text = text;
      this.owner = Meteor.userId();
      this.save();
    },
    edit(update) {
      for (let key in update) {
        if (!this.isOwner() && (key === 'private' || this.private)) {
          throw new Meteor.Error('not-authorized');
        }
        if (update.hasOwnProperty(key)) {
          this[key] = update[key];
        }
      }
      this.updatedAt = new Date();
      this.save();
    },
    isOwner() {
      return this.owner === Meteor.userId();
    }
  }
});

// if (Meteor.isServer) {
//   Task.unpublished = [ 'username', 'private' ];
// }

export default Task;
