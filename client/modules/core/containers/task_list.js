import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../components/task_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, LocalState, Collections} = context();
  Meteor.subscribe('users');
  Meteor.subscribe('tasks');
  const tasks = Collections.Task.find({}, { sort: { createdAt: -1 } }).fetch();
  const incompleteCount = Collections.Task.find({ checked: { $ne: true } }).count();
  const isLoggedIn = Boolean(Meteor.user());
  const hideCompleted = LocalState.get('hideCompleted');
  onData(null, {tasks, incompleteCount, isLoggedIn, hideCompleted});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList);
