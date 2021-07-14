import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Meta, Seo, Footer } from "../components";

export default function Layout({ children }) {
  return (
    <div className="Site">
      <Seo />
      <Meta />
      {/* <Navbar /> */}
      <div className="Site-content">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}