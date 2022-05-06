import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import "./style.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRedirectToTaskPage = () => {
    navigate("/todo-list");
  };

  return (
    <div className="home-page">
      <h1 className="home-page__heading">TaskDo</h1>
      <p className="home-page__desc">Manage You Task Checklist Easily</p>
      <Button
        value="Lets Start"
        variant={{
          type: "contained",
          color: "primary",
        }}
        className="home-page__btn"
        onClick={handleRedirectToTaskPage}
      />
    </div>
  );
};

export default HomePage;
