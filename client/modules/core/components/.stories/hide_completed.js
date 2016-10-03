import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import HideCompleted from '../hide_completed.jsx';

storiesOf('core.HideCompleted', module)
  .add('default view', () => {
    return (
      <HideCompleted toggleHideCompleted={action('clicked')}/>
    );
  });
