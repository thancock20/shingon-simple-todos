import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NewTask from '../new_task.jsx';

storiesOf('core.NewTask', module)
  .add('default view', () => {
    return (
      <NewTask />
    );
  });
