import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

const Loading = ({ className }) => {
  return (
    <div className={classNames("loading", className)}>
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
