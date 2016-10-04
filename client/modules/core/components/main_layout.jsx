import React from 'react';
import Helmet from 'react-helmet';
import Load from 'shingon-load-jss';

const Layout = ({content = () => null }) => (
  <div className={classes.body}>
    <Helmet
      title="Todo List"
      meta={[
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]}
    />
    <div>
      {content()}
    </div>
  </div>
);

const styles = {
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
  }
};
const classes = Load(styles);

export default Layout;
