import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('users', function () {
    return Meteor.users.find({}, {
      fields: {
        username: 1
      }
    });
  });
}
