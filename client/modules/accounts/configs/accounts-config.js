import {Accounts} from 'meteor/accounts-base';

export default () => {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
};
