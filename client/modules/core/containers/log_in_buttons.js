import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

const logIn =
  (typeof LogInButtons !== 'undefined') ?
  LogInButtons :
  (() => <p>[Login goes here]</p>);

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(logIn);
