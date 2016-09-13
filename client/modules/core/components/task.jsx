import React, { PropTypes } from 'react';
import Load from 'shingon-load-jss';

const Task = ({ task, toggleChecked, deleteTask }) => {
  const { classes } = Load(styles);
  const handleDelete = () => deleteTask(task._id);
  const handleCheck = () => toggleChecked(task._id, task.checked);

  return (
    <li className={task.checked ? classes.checked : ''}>
      <button className={classes.delete} onClick={handleDelete}>&times;</button>

      <input
        type="checkbox"
        readOnly
        checked={task.checked}
        onClick={handleCheck}
      />

    <span className={classes.text}>{ task.text }</span>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

const styles = {
  text: {
    marginLeft: 10
  },

  checked: {
    color: '#888',
    textDecoration: 'line-through'
  },

  private: {
    background: '#eee',
    borderColor: '#ddd'
  },

  delete: {
    float: 'right',
    fontWeight: 'bold',
    background: 'none',
    fontSize: '1em',
    border: 'none',
    position: 'relative'
  }
};

export default Task;
