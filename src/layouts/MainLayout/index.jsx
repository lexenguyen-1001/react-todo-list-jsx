import React from "react";
import { Outlet } from "react-router-dom";

import TodoProvider from "../../context/todoListContext";

import Header from "../../components/Header";

const MainLayout = () => {
  return (
    <>
      <TodoProvider>
        <Header />
        <Outlet />
      </TodoProvider>
    </>
  );
};

export default MainLayout;
