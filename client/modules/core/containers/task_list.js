import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../components/task_list.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Collections} = context();
  const tasks = Collections.Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
  const incompleteCount = Collections.Tasks.find({ checked: { $ne: true } }).count()
  const hideCompleted = LocalState.get('hideCompleted') || false;
  onData(null, {tasks, incompleteCount, hideCompleted});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList);
