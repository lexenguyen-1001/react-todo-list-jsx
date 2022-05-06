import React from "react";
import PropTypes from "prop-types";

import "./style.scss";
import classNames from "classnames";

const Button = ({ className, value, variant, ...rest }) => {
  return (
    <button
      className={classNames(
        "btn",
        `btn--${variant.type}`,
        variant.color,
        className
      )}
      {...rest}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  variant: PropTypes.exact({
    type: PropTypes.oneOf(["contained", "outlined"]).isRequired,
    color: PropTypes.oneOf(["primary", "default"]).isRequired,
  }),
};

export default Button;
