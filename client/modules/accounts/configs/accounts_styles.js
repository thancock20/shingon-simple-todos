const primary = '#315481';
const neutral = '#eee';
const error = '#ff3333';

export default {
  '.alt-accounts-status': {
    width: 300,
    fontWeight: 'bold',
    fontSize: '1.125em',
    '& button': {
      padding: '2%',
      border: 'solid 1px',
      borderRadius: 5,
      cursor: 'pointer',
      backgroundColor: primary,
      color: neutral
    }
  },
  '.alt-accounts-form': {
    position: 'absolute',
    zIndex: 1000,
    width: 300,
    backgroundColor: neutral,
    border: `1px solid ${primary}`,
    borderRadius: 5,
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

    '& button': {
      display: 'block',
      width: '90%',
      margin: '5%',
      paddingTop: '2%',
      paddingBottom: '2%',
      backgroundColor: primary,
      color: neutral,
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
      marginTop: '2%',
      paddingTop: '2%',
      paddingBottom: '2%',
      paddingLeft: '2%',
      border: `1px solid ${primary}`,
      borderRadius: 5
    }
  },

  '.alt-accounts-messages-error': {
    color: error,
    width: '90%',
    margin: '5%'
  },

  '.alt-accounts-login-separator': {
    textAligin: 'center',
    margin: '5%'
  },

  '.alt-accounts-form-link': {
    float: 'right',
    margin: 2,
    padding: 5,
    cursor: 'pointer',
    color: primary
  },

  '.altaccounts-form-link ~ .alt-accounts-form-link': {
    float: 'left'
  },

  '.alt-accounts-form-text': {
    width: '90%',
    margin: '5%'
  },

  '.alt-accounts-form-close': {
    float: 'right',
    margin: 2,
    padding: 5,
    paddingTop: 0,
    paddingBottom: 10,
    cursor: 'pointer',
    color: primary
  }
};
