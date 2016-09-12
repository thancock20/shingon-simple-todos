import React from 'react';
import useSheet from 'react-jss';

import Task from './task.jsx';

const TaskList = ({ sheet, tasks }) => {
  const { container } = sheet.classes;

  return (
    <div className={container}>
      <header>
        <h1>Todo List</h1>
      </header>

      <ul>
        {
          tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))
        }
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: '0 auto',
    minHeight: '100%',
    background: 'white',
  }
};

export default useSheet(TaskList, styles);
