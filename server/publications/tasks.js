import {Task} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import getUnpublishedFields from '/lib/get_unpublished_fields';

export default function () {
  Meteor.publishComposite('tasks', {
    find() {
      return Task.find({
        $or: [
          { private: { $ne: true } },
          { owner: this.userId }
        ]
      }, getUnpublishedFields(Task));
    },
    children: [
      {
        find(task) {
          return Meteor.users.find(
            { _id: task.owner },
            { limit: 1, fields: { username: 1 } }
          );
        }
      }
    ]
  });
}
