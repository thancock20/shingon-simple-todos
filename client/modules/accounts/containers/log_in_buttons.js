import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import LogInButtons from '../components/log_in_buttons.jsx';

export const composer = ({context}, onData) => {
  const {Blaze} = context();

  onData(null, {Blaze});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LogInButtons);
