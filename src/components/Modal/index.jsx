import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

const Modal = ({ children, className, bodyClassName, onClickOutside }) => {
  const handleClickOutside = () => {
    onClickOutside?.();
  };

  useEffect(() => {
    const originStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originStyle;
    };
  }, []);

  return (
    <div className={classNames("modal", className)}>
      <div className="modal__backdrop" onClick={handleClickOutside} />
      <div className={classNames("modal__body", bodyClassName)}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  onClickOutside: PropTypes.func,
};

Modal.defaultProps = {};

export default Modal;
