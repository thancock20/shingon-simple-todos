import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import HideCompleted from '../components/hide_completed.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  let hideCompleted = LocalState.get('hideCompleted');

  onData(null, {hideCompleted});
};

export const depsMapper = (context, actions) => ({
  toggleHideCompleted: actions.tasks.toggleHideCompleted,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(HideCompleted);
