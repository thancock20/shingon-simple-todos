import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TaskList from '../task_list.jsx';
import NewTask from '../../containers/new_task';
import Task from '../../containers/task.js';
import HideCompleted from '../../containers/hide_completed';
import LogInButtons from '/client/modules/accounts/containers/log_in_buttons';

setComposerStub(NewTask, (props) => {
  const data = {
    ...props,
    create: action('new-task-submitted'),
    setInput: action('new-task-changed')
  };

  return data;
});

setComposerStub(Task, (props) => {
  const data = {
    ...props,
    toggleChecked: action('task-checked'),
    togglePrivate: action('task-private-clicked'),
    deleteTask: action('task-delete-clicked')
  };

  return data;
});

setComposerStub(HideCompleted, (props) => {
  const data = {
    ...props,
    hideCompleted: false,
    toggleHideCompleted: action('hide-completed-toggled')
  };

  return data;
});

setComposerStub(LogInButtons, (props) => {
  const data = {
    ...props,
  };

  return data;
})

storiesOf('core.TaskList', module)
  .add('default view', () => {
    const tasks = [
      {
        _id: 1,
        text: 'This is task 1',
        username: 'John',
        checked: false,
        isOwner: true
      }, {
        _id: 2,
        text: 'This is task 2',
        username: 'John',
        checked: false,
        isOwner: true,
        private: true
      }, {
        _id: 3,
        text: 'This is task 3',
        username: 'Bob',
        checked: true
      } ];

    return (
      <TaskList
        tasks={tasks}
        isLoggedIn={true}
        incompleteCount={3}
      />
    );
  });
