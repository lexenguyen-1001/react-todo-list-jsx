import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { ReactComponent as TrashIcon } from "../../../../assets/icons/trash.svg";

import Checkbox from "../../../../components/fields/Checkbox";

import "./style.scss";

const Task = ({ id, name, isDone, onCheckboxChange, onDeleteTask }) => {
  const handleCheckboxChange = () => {
    onCheckboxChange?.(id);
  };

  return (
    <div
      className={classNames("task", {
        done: isDone,
      })}
    >
      <TrashIcon className="task__trash" onClick={() => onDeleteTask?.(id)} />
      <Checkbox
        className="task__checkbox"
        defaultChecked={isDone}
        onChange={handleCheckboxChange}
      />
      {name}
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  onCheckboxChange: PropTypes.func,
};

Task.defaultProps = {
  isDone: false,
};

export default Task;
