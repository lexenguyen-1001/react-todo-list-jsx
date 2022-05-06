import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import avatar from "../../assets/images/avatar.png";

import { TodoContext } from "../../context/todoListContext";

import Button from "../Button";

import "./style.scss";

const Header = () => {
  const navigate = useNavigate();

  const { pendingTasks } = useContext(TodoContext);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-user">
          <div className="header-user__avatar">
            <img srcSet={`${avatar} 4x`} alt="header avatar" />
          </div>

          <div className="header-user__group">
            <h3 className="header-user__name">Hi Shobhit 👏🏽</h3>
            <p className="header-user__task">
              {pendingTasks.length} tasks pending
            </p>
          </div>
        </div>

        <h1 className="header__logo">TaskDo</h1>

        <div className="header__action">
          <Button
            className="header__btn"
            value="Logout"
            variant={{
              type: "outlined",
              color: "primary",
            }}
            onClick={handleLogout}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
