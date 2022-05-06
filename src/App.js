import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes";

import Loading from "./components/Loading";

import "./App.scss";
import RedirectAnimation from "./components/RedirectAnimation";

function App() {
  return (
    <Suspense fallback={<Loading className="app-loading" />}>
      <div className="app">{useRoutes(routes)}</div>
      <RedirectAnimation />
    </Suspense>
  );
}

export default App;
