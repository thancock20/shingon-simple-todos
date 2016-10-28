import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import LogInButtons from '../log_in_buttons.jsx';

storiesOf('core.LogInButtons', module)
  .add('default view', () => {
    return (
    <LogInButtons />
    );
  });
