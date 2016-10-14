import React from 'react';

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
