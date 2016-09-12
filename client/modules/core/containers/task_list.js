import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../components/task_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const tasks = Collections.Tasks.find().fetch();
  onData(null, {tasks});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList);
