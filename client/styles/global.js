export default {
  body: {
    fontFamily: 'sans-serif',
    backgroundColor: '#315481',
    backgroundImage: 'linear-gradient(to bottom, #315481, #918e82 100%)',
    backgroundAttachment: 'fixed',

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    padding: 0,
    margin: 0,

    fontSize: 14
  },

  header: {
    background: '#d2edf4',
    backgroundImage: 'linear-gradient(to bottom, #d0edf5, #e1d5f0 100%)',
    padding: '20px 15px 15px 15px',
    position: 'relative'
  },

  '#login-buttons': {
    display: 'block'
  },

  h1: {
    fontSize: '1.5em',
    margin: 0,
    marginBottom: 10,
    display: 'inline-block',
    marginRight: '1em'
  },

  form: {
    marginTop: 10,
    marginBottom: -10,
    position: 'relative'
  },

  ul: {
    margin: 0,
    padding: 0,
    background: 'white'
  },

  li: {
    position: 'relative',
    listStyle: 'none',
    padding: 15,
    borderBottom: '#eee solid 1px',

    '@media (max-width: 600px)': {
      padding: '12px 15px'
    }
  }
};
