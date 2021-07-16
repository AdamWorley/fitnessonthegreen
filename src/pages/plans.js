import * as React from "react";
import "../styles/main.scss";
import { Layout, Navbar, Services } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <main className="section">
        <h1 className="title has-text-light">Plans &amp; Services</h1>
        <Services />
      </main>
    </Layout>
  );
};

export default IndexPage;
