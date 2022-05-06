import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "../fields/TextField";
import Button from "../Button";

const schema = yup.object().shape({
  name: yup.string().required("A name is required"),
});

const TaskForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form className="create-task-form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        required
        id="create-task-name"
        label="Name"
        register={register("name")}
        message={errors?.name?.message}
      />

      <Button
        className="create-task-form__btn"
        variant={{
          type: "contained",
          color: "primary",
        }}
        type="submit"
        value="Create Task"
      />
    </form>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
