import {Task} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import getUnpublishedFields from '/lib/getUnpublishedFields';

export default function () {
  Meteor.publish('tasks', function () {
    return Task.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId }
      ]
    }, getUnpublishedFields(Task));
  });
}
