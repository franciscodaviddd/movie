import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "../components/pages/Home";
import Catalog from "../components/pages/Catalog";
import Detail from "../components/pages/detail/Detail";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="/:category" element={<Catalog />} />
          <Route path="/:category/:id" element={<Detail />} />
          <Route path="/:category/search/:keyword" element={<Catalog />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
