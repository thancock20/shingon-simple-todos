import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../components/task_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const tasks = [
    { _id: 1, text: 'This is task 1'},
    { _id: 2, text: 'This is task 2'},
    { _id: 3, text: 'This is task 3'}
  ];
  onData(null, {tasks});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList);
