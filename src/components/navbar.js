import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Layout() {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
    document.querySelector(".navbar-burger").classList.toggle("is-active");
  }

  const { site } = useStaticQuery(query);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <StaticImage
                src="../images/logo.jpeg"
                loading="eager"
                alt="Logo"
                width={679}
                height={480}
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
                  to="/about"
                  activeClassName="has-text-weight-bold is-underlined"
                >
                  About
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
                  to="/faq"
                  activeClassName="has-text-weight-bold is-underlined"
                >
                  FAQs
                </Link>
                {/* <Link
                className="navbar-item button is-primary"
                to="/testimonials"
                activeClassName="has-text-weight-bold is-underlined"
              >
                Testimonials
              </Link> */}
                <a
                  href={`http://www.instagram.com/${site.siteMetadata.instagram}`}
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
    </div>
  );
}

const query = graphql`
  query Navbar {
    site {
      siteMetadata {
        instagram
      }
    }
  }
`;
