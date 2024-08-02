import React, { Children } from "react";
import Header from "./header/header";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
