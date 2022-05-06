import React, { useContext } from "react";

import { IoIosClose } from "react-icons/io";

import { TodoContext } from "../../../../context/todoListContext";

import { ReactComponent as AddIcon } from "../../../../assets/icons/addIcon.svg";

import useToggle from "../../../../hooks/useToggle";

import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import TaskForm from "../../../../components/TaskForm";

import "./style.scss";

const CreateTask = () => {
  const [showCreateForm, toggleShowCreateForm] = useToggle();
  const { onCreateTask } = useContext(TodoContext);

  const handleSubmitCreateTask = (data) => {
    onCreateTask(data);
    toggleShowCreateForm();
  };

  return (
    <>
      <Button
        className="todo-list-page__add-btn"
        value={
          <>
            <AddIcon /> Add New Task
          </>
        }
        variant={{
          type: "outlined",
          color: "primary",
        }}
        onClick={toggleShowCreateForm}
      />

      {showCreateForm && (
        <Modal onClickOutside={toggleShowCreateForm}>
          <section className="create-task">
            <div className="create-task__header">
              <h3 className="create-task__heading">Create task</h3>

              <Button
                variant={{
                  type: "outlined",
                  color: "default",
                }}
                value={<IoIosClose />}
                onClick={toggleShowCreateForm}
              />
            </div>

            <TaskForm onSubmit={handleSubmitCreateTask} />
          </section>
        </Modal>
      )}
    </>
  );
};

export default CreateTask;
