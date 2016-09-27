import React from 'react';
import Load from '/lib/load_jss';

import Task from '../containers/task.js';
import NewTask from '../containers/new_task.js';
import HideCompleted from '../containers/hide_completed.js';

const TaskList = ({ tasks, incompleteCount, currentUser, hideCompleted, showLogIn }) => {
  const renderTasks = () => {
    let filteredTasks = tasks;
    if (hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      return (
        <Task
          key={task._id}
          task={task}
        />
      );
    });
  };

  return (
    <div className={classes.container}>
      <header>
        <h1>Todo List ({incompleteCount})</h1>
        <HideCompleted />

        { showLogIn ?
          <LogInButtons /> :
          <p>[Login goes here]</p> }

        { currentUser ?
          <NewTask /> :
        '' }

      </header>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: '0 auto',
    minHeight: '100%',
    background: 'white',
  },
};
const classes = Load(styles);

export default TaskList;
