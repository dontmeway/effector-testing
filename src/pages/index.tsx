import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./login"));
const Root = lazy(() => import("./root"));
const Store = lazy(() => import("./store"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="login" element={<Login />} />
      <Route path="store" element={<Store />} />
    </Routes>
  );
};
