import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const getUnpublished = () => {
  const fields = {};
  if (Tasks.unpublished) {
    Tasks.unpublished.forEach((field) => {
      fields[field] = 0;
    });
  }
  return fields;
};

export default function () {
  Meteor.publish('tasks', function () {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId }
      ]
    }, {fields: getUnpublished()});
  });
}
