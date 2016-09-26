import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TaskList from '../task_list.jsx';
import NewTask from '../../containers/new_task';
import Task from '../../containers/task.js';
import HideCompleted from '../../containers/hide_completed';

setComposerStub(NewTask, (props) => {
  const data = {
    ...props,
    create: () => {},
    setInput: () => {}
  };

  return data;
});

setComposerStub(Task, (props) => {
  const data = {
    ...props,
    toggleChecked: () => {},
    togglePrivate: () => {},
    deleteTask: () => {}
  };

  return data;
});

setComposerStub(HideCompleted, (props) => {
  const data = {
    ...props,
    hideCompleted: false,
    toggleHideCompleted: () => {}
  };

  return data;
});

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
        currentUser={true}
        incompleteCount={3}
      />
    );
  });
