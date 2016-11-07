import React, { PropTypes } from 'react';
import Load from 'shingon-load-jss';
import classnames from 'classnames';
import {partial} from 'partial-application';

const Task = ({ task, toggleChecked, togglePrivate, deleteTask }) => (
  <li
    className={classnames({
      [classes.li]: true,
      [classes.checked]: task.checked,
      [classes.private]: task.private
    })}>

    { task.isOwner() && (
      <button
        className={classes.delete}
        onClick={partial(deleteTask, task._id)}
      >
        &times;
      </button>
    ) }

    <input
      type="checkbox"
      readOnly
      checked={task.checked}
      onClick={partial(toggleChecked, task._id, task.checked)}
    />

    { task.isOwner() && (
      <button
        className={classes.togglePrivate}
        onClick={partial(togglePrivate, task._id, task.private)}
      >
        { task.private ? 'Private' : 'Public' }
      </button>
    ) }

    <span className={classes.text}>
      <strong>{task.username}</strong>: { task.text }
    </span>
  </li>
);
Task.propTypes = {
  task: PropTypes.object.isRequired,
  toggleChecked: PropTypes.func,
  togglePrivate: PropTypes.func,
  deleteTask: PropTypes.func
};

const styles = {
  li: {
    position: 'relative',
    listStyle: 'none',
    padding: 15,
    borderBottom: '#eee solid 1px',

    '@media (max-width: 600px)': {
      padding: '12px 15px'
    }
  },

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
const classes = Load(styles);

export default Task;
