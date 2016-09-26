import React from 'react';
import Helmet from 'react-helmet';

import styles from '../../../styles/index.js';
import Load from 'shingon-load-jss';
Load(styles, 'global');

const Layout = ({content = () => null }) => (
  <div>
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

export default Layout;
