import React, { PropTypes } from 'react';
import useSheet from 'react-jss';

const Task = ({ task, sheet }) => {
  const {} = sheet.classes;

  return (
    <li>{ task.text }</li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

const styles = { };

export default useSheet(Task, styles);
