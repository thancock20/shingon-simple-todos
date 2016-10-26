import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import Task from '../task.jsx';

storiesOf('core.Task', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    const task = {
      text: `${text('Text', 'Hello, World!')}`,
      username: `${text('Username', 'John')}`,
      checked: boolean('Checked', false),
      private: boolean('Private', false),
      isOwner: () => boolean('isOwner', true)
    };

    return (
      <ul>
        <Task
          task={task}
        />
      </ul>
    );
  });
