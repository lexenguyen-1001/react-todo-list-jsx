import React from "react";
import PropTypes from "prop-types";

import FieldGroup from "../FieldGroup";

import "./style.scss";

const TextField = ({ required, id, label, register, message, ...rest }) => {
  return (
    <FieldGroup required={required} id={id} label={label} message={message}>
      <input
        type="text"
        id={id}
        className="text-field"
        {...rest}
        {...register}
      />
    </FieldGroup>
  );
};

TextField.propTypes = {
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.object,
  message: PropTypes.string,
};

TextField.defaultProps = {
  required: false,
  register: {},
};

export default TextField;
