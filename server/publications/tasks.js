import {Task} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const getUnpublished = () => {
  const fields = {};
  if (Task.unpublished) {
    Task.unpublished.forEach((field) => {
      fields[field] = 0;
    });
  }
  return fields;
};

export default function () {
  Meteor.publish('tasks', function () {
    return Task.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId }
      ]
    }, {fields: getUnpublished()});
  });
}
