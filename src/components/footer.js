import React from "react";
import bulma from "../images/made-with-bulma--semiwhite.png";
import terms from "../documents/terms.pdf";
import PARQ from "../documents/PARQ.pdf";

export default function Layout() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a href={terms} target="_blank" rel="noreferrer">
            T&amp;Cs
          </a>
          {" | "}
          <a href={PARQ} target="_blank" rel="noreferrer">
            Physical Activity Readiness Questionnaire (PAR Q)
          </a>
        </p>
        <p>
          &copy;2021 by Fitness on the Green | Created by{" "}
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
