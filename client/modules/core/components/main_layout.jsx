import React from 'react';
import Helmet from 'react-helmet';

import styles from '../../../styles/index.js';
import Load from 'shingon-load-jss';
Load(styles, 'global');

const Layout = ({content = () => null }) => (
  <div>
    <Helmet
      Title="Todo List"
    />
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
