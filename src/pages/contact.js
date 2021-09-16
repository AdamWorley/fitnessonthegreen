import * as React from "react";
import "../styles/main.scss";
import { Layout, Navbar, Contact } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <main className="section">
        <h1 className="title has-text-light">Contact</h1>
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;
