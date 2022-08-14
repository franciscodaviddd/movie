import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
