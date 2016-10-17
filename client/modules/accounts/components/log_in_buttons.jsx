import React from 'react';
import Styles from '../configs/accounts_styles';
import Load from 'shingon-load-jss';

Load(Styles, 'global');

const logInButtons = ({AccountStatus, AccountForm}) => (
  <div>
    {(typeof AccountStatus !== 'undefined') ?
      <div>
        <AccountStatus />
        <AccountForm showClose='true' />
      </div> :
      <div className="alt-accounts-status">
        <button>Sign In</button>
      </div> }
  </div>
    );

export default logInButtons;
