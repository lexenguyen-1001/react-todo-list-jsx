import { lazy } from "react";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const TodoListPage = lazy(() => import("../pages/TodoListPage"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todo-list",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <TodoListPage />,
      },
    ],
  },
];

export default routes;
