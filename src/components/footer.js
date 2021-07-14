import React from "react";
import bulma from "../images/made-with-bulma--semiwhite.png";

export default function Layout() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>&copy;2021 by Fitness on the Green |
          Created by{" "}
          <a href="https://adamworley.com" target="_blank" rel="noreferrer">
            Adam Worley
          </a>
        </p>
        <a href="https://bulma.io" target="_blank" rel="noreferrer">
          <img src={bulma} alt="Made with Bulma" width="128" height="24" />
        </a>
      </div>
    </footer>
  );
}