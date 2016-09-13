import React from 'react';
// import useSheet from 'react-jss';
// import jss from 'jss';
import Load from 'shingon-load-jss';

import Task from '../containers/task.js';
import NewTask from '../containers/new_task.js';

const TaskList = ({  tasks }) => {
  // const { classes } = sheet;
  // const { classes } = jss.createStyleSheet(styles).attach();
  const { classes } = Load(styles);

  return (
    <div className={classes.container}>
      <header>
        <h1>Todo List</h1>
        <NewTask />
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
  },
};

// export default useSheet(TaskList, styles);
export default TaskList;
