import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../components/task_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const tasks = Collections.Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
  onData(null, {tasks});
};

export const depsMapper = (context, actions) => ({
  create: actions.tasks.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList);
