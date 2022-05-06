import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useToggle from "../../hooks/useToggle";

import Loading from "../Loading";

import "./style.scss";

const RedirectAnimation = () => {
  const location = useLocation();

  const [transitionLoading, setTransitionLoading] = useToggle(false);

  useEffect(() => {
    setTransitionLoading();
  }, [location, setTransitionLoading]);

  useEffect(() => {
    let timeout = null;
    if (transitionLoading) {
      timeout = setTimeout(setTransitionLoading, 500);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [transitionLoading, setTransitionLoading]);

  if (!transitionLoading) return null;
  return <Loading className="redirect-loading" />;
};

export default RedirectAnimation;
