import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FaInstagram } from "react-icons/fa";

export default function Layout() {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
    document.querySelector(".navbar-burger").classList.toggle("is-active");
  }

  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <StaticImage
              src="../images/header-small.png"
              loading="eager"
              alt="Logo"
              width={500}
              height={167}
              placeholder="blurred"
              layout="constrained"
              // imgClassName="image"
            />
          </Link>
          <button
            className="navbar-burger button is-text"
            data-target="navbarMenuHero"
            onClick={toggleBurgerMenu}
            aria-label="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div id="navbarMenuHero" className="navbar-menu">
          <div className="navbar-end">
            <div className="buttons">
              <Link
                className="navbar-item button is-primary"
                to="/"
                activeClassName={"is-outlined"}
              >
                Home
              </Link>
              <Link
                className="navbar-item button is-primary"
                to="/plans"
                activeClassName={"is-outlined"}
              >
                Plans &amp; Services
              </Link>
              <Link
                className="navbar-item button is-primary"
                to="/contact"
                activeClassName={"is-outlined"}
              >
                Contact
              </Link>
              {/* <Link
              className="navbar-item button is-primary"
              to="/testimonials"
              activeClassName={"is-outlined"}
            >
              Testimonials
            </Link> */}
              <a
                href="http://www.instagram.com/jane.zanganeh"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
