import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Task from '../task.jsx';

storiesOf('core.Task', module)
  .add('default view', () => {
    const task = {
      text: 'Hello, World!'
    };

    return (
      <ul>
        <Task
          task={task}
        />
      </ul>
    );
  });
