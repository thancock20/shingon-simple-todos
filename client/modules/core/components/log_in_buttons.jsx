import React from 'react';

export default () => (
    <div>
      {(typeof LogInButtons !== 'undefined') ?
        <LogInButtons /> :
        <p>[Login goes here]</p>}
    </div>
);
