import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

const Checkbox = ({ defaultChecked, className, onChange }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleOnChange = () => {
    onChange?.();
    setIsChecked((state) => !state);
  };

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked, setIsChecked]);

  return (
    <div className={classNames("checkbox", className)}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  defaultChecked: false,
};

export default Checkbox;
