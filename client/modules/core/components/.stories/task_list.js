import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TaskList from '../task_list.jsx';

storiesOf('core.TaskList', module)
  .add('default view', () => {
    const tasks = [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' }
    ];

    return (
      <TaskList tasks={tasks} />
    );
  });
