import * as React from "react";
import "../styles/main.scss";
import { Layout, Navbar, Services } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <main className="section">
        <Services />
      </main>
    </Layout>
  );
};

export default IndexPage;
