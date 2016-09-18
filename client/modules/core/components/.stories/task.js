import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Task from '../task.jsx';

storiesOf('core.Task', module)
  .add('default view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John'
    };

    return (
      <ul>
        <Task
          task={task}
          showPrivateButton={true}
        />
      </ul>
    );
  })
  .add('checked view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John',
      checked: true
    };

    return (
      <ul>
        <Task
          task={task}
          showPrivateButton={true}
        />
      </ul>
    );
  })
  .add('private view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John',
      private: true
    };

    return (
      <ul>
        <Task
          task={task}
          showPrivateButton={true}
        />
      </ul>
    );
  })
  .add('non owner view', () => {
    const task = {
      text: 'Hello, World!',
      username: 'John'
    };

    return (
      <ul>
        <Task
          task={task}
          showPrivateButton={false}
        />
      </ul>
    );
  });
