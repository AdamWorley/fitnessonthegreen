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
              src="../images/header-nav.png"
              loading="eager"
              alt="Logo"
              width={300}
              height={100}
              placeholder="blurred"
              layout="constrained"
              imgClassName="image"
            />
          </Link>
          <button
            className="navbar-burger button is-text"
            data-target="navbarMenu"
            onClick={toggleBurgerMenu}
            aria-label="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="buttons">
              <Link
                className="navbar-item button is-primary"
                to="/"
                activeClassName="has-text-weight-bold is-underlined"
              >
                Home
              </Link>
              <Link
                className="navbar-item button is-primary"
                to="/plans"
                activeClassName="has-text-weight-bold is-underlined"
              >
                Plans &amp; Services
              </Link>
              <Link
                className="navbar-item button is-primary"
                to="/contact"
                activeClassName="has-text-weight-bold is-underlined"
              >
                Contact
              </Link>
              <Link
                className="navbar-item button is-primary"
                to="/testimonials"
                activeClassName="has-text-weight-bold is-underlined"
              >
                Testimonials
              </Link>
              <a
                href="http://www.instagram.com/jane.zanganeh"
                target="_blank"
                rel="noreferrer"
                className="button is-primary has-white-text"
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
