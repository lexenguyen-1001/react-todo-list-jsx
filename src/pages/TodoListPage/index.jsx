import React from "react";

import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

import "./style.scss";

const TodoListPage = () => {
  return (
    <div className="todo-list-page">
      <div className="container sm">
        <CreateTask />

        <TaskList />
      </div>
    </div>
  );
};

export default TodoListPage;
