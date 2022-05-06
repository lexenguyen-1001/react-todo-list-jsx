import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

const FieldGroup = ({ children, required, id, label, message }) => {
  return (
    <div className="form-group">
      <label
        htmlFor={id}
        className={classNames("form-group__label", {
          required,
        })}
      >
        {label}
      </label>

      {children}

      {message && <p className="form-group__message">{message}</p>}
    </div>
  );
};

FieldGroup.propTypes = {
  children: PropTypes.any.isRequired,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
};

FieldGroup.defaultProps = {
  required: false,
};

export default FieldGroup;
