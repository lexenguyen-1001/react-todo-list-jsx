import React, { useContext } from "react";

import { TodoContext } from "../../../../context/todoListContext";

import Task from "../Task";

import "./style.scss";

const TaskList = () => {
  const { tasks, onUpdateStatusTask, onDeleteTask } = useContext(TodoContext);

  return (
    <section className="task-list">
      {!Boolean(tasks.length) && <>No task here ...</>}

      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onCheckboxChange={onUpdateStatusTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  );
};

export default TaskList;
