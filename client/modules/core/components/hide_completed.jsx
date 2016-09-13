import React from 'react';
import Load from 'shingon-load-jss';

const HideCompleted = ({ hideCompleted, toggleHideCompleted }) => {
  const { classes } = Load(styles);

  return (
    <label className={classes.hideCompleted}>
      <input
        type="checkbox"
        readOnly
        checked={hideCompleted}
        onClick={toggleHideCompleted}
      />
      Hide Completed Tasks
    </label>
  );
};

const styles = {
  hideCompleted: {
    float: 'right'
  }
};

export default HideCompleted;
