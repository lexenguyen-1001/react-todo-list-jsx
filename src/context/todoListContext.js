import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (Array.isArray(tasks)) return tasks;

    localStorage.setItem("tasks", JSON.stringify([]));
    return [];
  });

  const handleSaveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  };

  const handleCreateTask = ({ name }) => {
    handleSaveTasks([
      ...tasks,
      {
        id: uuid(),
        name,
        isDone: false,
        createdAt: Date.now(),
      },
    ]);
  };

  const handleUpdateStatusTask = (id) => {
    handleSaveTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }

        return task;
      })
    );
  };

  const handleDeleteTask = (id) => {
    handleSaveTasks(tasks.filter((task) => task.id !== id));
  };

  const value = {
    tasks,
    pendingTasks: tasks.filter((task) => !task.isDone),
    onCreateTask: handleCreateTask,
    onUpdateStatusTask: handleUpdateStatusTask,
    onDeleteTask: handleDeleteTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
