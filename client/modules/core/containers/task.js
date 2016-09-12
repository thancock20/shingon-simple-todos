import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Task from '../components/task.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  toggleChecked: actions.tasks.toggleChecked,
  deleteTask: actions.tasks.deleteTask,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Task);
