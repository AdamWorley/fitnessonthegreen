import * as React from "react"
import "../styles/main.scss";
import { Layout, Navbar } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar/>
      <main className="section">
          <h1 className="title">Contact</h1>
      </main>
    </Layout>
  )
}

export default IndexPage
