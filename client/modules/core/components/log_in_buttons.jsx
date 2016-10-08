import React from 'react';
import Load from 'shingon-load-jss';

const logInButtons = () => (
  <div>
    {(typeof AccountStatus !== 'undefined') ?
    <div>
      <AccountStatus />
      <AccountForm showClose='true' />
    </div> :
    <p>[Login goes here]</p>}
  </div>
);

const styles = {
  '.alt-accounts-status': {
    width: 300,
    '& button': {
      padding: '2%',
      border: 'solid 1px',
      borderRadius: 5,
      cursor: 'pointer'
    }
  },
  '.alt-accounts-form': {
    position: 'absolute',
    zIndex: 1000,
    width: 300,
    backgroundColor: 'lightgray',
    paddingTop: 10,
    boxShadow: '10px 10px 5px darkgray',

    '&:after': {
      content: '" "',
      display: 'block',
      height: 50,
      width: 350,
      position: 'absolute',
      zIndex: -1
    },

    '& .alt-accounts-messages-error': {
      color: 'red',
      width: '90%',
      margin: '5%'
    },

    '& .alt-accounts-login-separator': {
      textAligin: 'center',
      margin: '5%'
    },

    '& button': {
      display: 'block',
      width: '90%',
      margin: '5%',
      paddingTop: '2%',
      paddingBottom: '2%',
      backgroundColor: 'cornflowerblue',
      border: 'solid 1px',
      borderRadius: 5,
      cursor: 'pointer'
    },

    '& label': {
      display: 'block',
      width: '90%',
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '5%'
    },

    '& span': {
      display: 'none'
    },

    '& input': {
      display: 'block',
      width: '87%',
      marginLeft: '5%',
      marginBottom: '5%',
      marginTop: '5%',
      paddingTop: '2%',
      paddingBottom: '2%',
      paddingLeft: '2%',
      border: 'solid 1px',
      borderRadius: 5
    },

    '& .alt-accounts-form-link': {
      float: 'right',
      margin: 2,
      padding: 5,
      cursor: 'pointer'
    },

    '& .altaccounts-form-link ~ .alt-accounts-form-link': {
      float: 'left'
    },

    '& .alt-accounts-form-text': {
      width: '90%',
      margin: '5%'
    },

    '& .alt-accounts-form-close': {
      float: 'right',
      margin: 2,
      padding: 5,
      paddingTop: 0,
      paddingBottom: 10,
      cursor: 'pointer'
    }
  }
};
Load(styles, 'global');

export default logInButtons;