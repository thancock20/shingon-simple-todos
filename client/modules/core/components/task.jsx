import React, { PropTypes } from 'react';
import Load from 'shingon-load-jss';
import classnames from 'classnames';

const Task = ({ task, showPrivateButton, toggleChecked, togglePrivate, deleteTask }) => {
  const handleDelete = () => deleteTask(task._id);
  const handleChecked = () => toggleChecked(task._id, task.checked);
  const handlePrivate = () => togglePrivate(task._id, task.private);

  return (
    <li
      className={classnames({
        [classes.checked]: task.checked,
        [classes.private]: task.private
      })}>
      <button
        className={classes.delete}
        onClick={handleDelete}
      >
        &times;
      </button>

      <input
        type="checkbox"
        readOnly
        checked={task.checked}
        onClick={handleChecked}
      />

      { showPrivateButton ? (
          <button
            className={classes.togglePrivate}
            onClick={handlePrivate}
          >
            { task.private ? 'Private' : 'Public' }
          </button>
      ) : '' }

    <span className={classes.text}>
      <strong>{task.username}</strong>: { task.text }
    </span>
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
  },

  togglePrivate: {
    marginLeft: 5
  }
};
const { classes } = Load(styles);

export default Task;
