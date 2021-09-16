import * as React from "react";
import { Link } from "gatsby";
import { Layout, Navbar } from "../components";

const Thanks = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <h1>Thank you!</h1>
        <p>This is a custom thank you page for form submissions</p>
        <Link to="/" className="button is-success">
          Home
        </Link>
      </main>
    </Layout>
  );
};

export default Thanks;
