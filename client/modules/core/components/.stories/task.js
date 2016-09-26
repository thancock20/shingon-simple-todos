import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Task from '../task.jsx';

storiesOf('core.Task', module)
  .add('default view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John',
      checked: false,
      isOwner: true
    };

    return (
      <ul>
        <Task
          task={task}
        />
      </ul>
    );
  })
  .add('checked view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John',
      checked: true,
      isOwner: true
    };

    return (
      <ul>
        <Task
          task={task}
        />
      </ul>
    );
  })
  .add('private view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John',
      checked: false,
      private: true,
      isOwner: true
    };

    return (
      <ul>
        <Task
          task={task}
        />
      </ul>
    );
  })
  .add('non owner view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John',
      checked: false,
      isOwner: false
    };

    return (
      <ul>
        <Task
          task={task}
        />
      </ul>
    );
  });
