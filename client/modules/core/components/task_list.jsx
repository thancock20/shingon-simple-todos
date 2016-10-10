import React from 'react';
import Load from 'shingon-load-jss';

import Task from '../containers/task.js';
import NewTask from '../containers/new_task.js';
import HideCompleted from '../containers/hide_completed.js';
import LogInButtons from './log_in_buttons.jsx';

const TaskList = ({ tasks, incompleteCount, isLoggedIn, hideCompleted }) => {
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
      <header className={classes.header}>
        <h1 className={classes.h1}>Todo List ({incompleteCount})</h1>
        <HideCompleted />

        <LogInButtons />

        { isLoggedIn && <NewTask /> }

      </header>
      <ul className={classes.ul}>{renderTasks()}</ul>
    </div>
  );
};

const styles = {
  header: {
    background: '#d2edf4',
    backgroundImage: 'linear-gradient(to bottom, #d0edf5, #e1d5f0 100%)',
    padding: '20px 15px 15px 15px',
    position: 'relative'
  },

  h1: {
    fontSize: '1.5em',
    margin: 0,
    marginBottom: 10,
    display: 'inline-block',
    marginRight: '1em'
  },

  ul: {
    margin: 0,
    padding: 0,
    background: 'white'
  },

  container: {
    maxWidth: 600,
    margin: '0 auto',
    minHeight: '100%',
    background: 'white',
  },
};
const classes = Load(styles);

export default TaskList;
