import React from 'react';
import Load from 'shingon-load-jss';

import Task from '../containers/task.js';
import NewTask from '../containers/new_task.js';
import HideCompleted from '../containers/hide_completed.js';

const TaskList = ({ tasks, incompleteCount, hideCompleted }) => {
  const { classes } = Load(styles);

  const renderTasks = () => {
    let filteredTasks = tasks;
    if (hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  };

  return (
    <div className={classes.container}>
      <header>
        <h1>Todo List ({incompleteCount})</h1>
        <HideCompleted />
        <NewTask />
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

export default TaskList;
