import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewTask from '../components/new_task.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, LocalState, Collections} = context();
  const taskInput = LocalState.get('taskInput');

  onData(null, {taskInput});
};

export const depsMapper = (context, actions) => ({
  create: actions.tasks.create,
  setInput: actions.tasks.setInput,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewTask);
