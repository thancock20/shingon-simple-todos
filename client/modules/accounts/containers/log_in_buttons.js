import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import LogInButtons from '../components/log_in_buttons.jsx';
import altAccountsConfig from '../configs/alt-accounts-config';

export const composer = ({context}, onData) => {
  const {AccountStatus, AccountForm} = context();
  altAccountsConfig();

  onData(null, {AccountStatus, AccountForm});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LogInButtons);
