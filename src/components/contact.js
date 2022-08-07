import React from "react";
import { navigate } from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";
import { Map } from "../components";
import { FaInstagram, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import terms from "../documents/terms.pdf";
import PARQ from "../documents/PARQ.pdf";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const { site } = useStaticQuery(foo);

  return (
    <section
      id="contact"
      className="section m-5 has-background-white has-text-black"
    >
      <div className="columns m-4 is-vcentered">
        <div className="column is-half">
          <h2 className="title">Contact Us</h2>
          <h3 className="subtitle">
            There's many ways you can contact us, please get in touch. <br />
            We can't wait to hear from you!
          </h3>
          <p className="is-size-5">
            <a href="tel:07498321545">
              <FaMobileAlt />
              &nbsp; 07498 321545
            </a>
          </p>
          <p className="is-size-5">
            <a href="mailto:contact@fitonthegreen.co.uk">
              <FaEnvelope />
              &nbsp; contact@fitonthegreen.co.uk
            </a>
          </p>
          <p className="is-size-5">
            <a
              href={`http://www.instagram.com/${site.siteMetadata.instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              &nbsp; @{site.siteMetadata.instagram}
            </a>
          </p>
          <hr />
          <h2 className="title">Get Started</h2>
          <p className="is-size-5">
            The Green at Woodgate
            <br />
            Woodgate
            <br />
            Pease Pottage
            <br />
            West Sussex
            <br />
            RH11 9GX
          </p>
          <hr />
          <h2 className="title">Documents</h2>
          <p className="is-size-5">
            <a href={terms} target="_blank" rel="noreferrer">
              T&amp;Cs
            </a>
          </p>
          <p className="is-size-5">
            <a href={PARQ} target="_blank" rel="noreferrer">
              Physical Activity Readiness Questionnaire (PAR Q)
            </a>
          </p>
        </div>
        <div className="column">
        <form method="POST" action="/api/submit" encType="multipart/form-data">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label className="label">
                Don't fill this out:
                <input name="first-name" />
              </label>
            </p>
            <p>
              <label className="label">
                Name
                <br />
                <input
                  className="input"
                  type="text"
                  name="name"                 
                />
              </label>
            </p>
            <p>
              <label className="label">
                Address
                <br />
                <input
                  className="input"
                  type="text"
                  name="address"                 
                />
              </label>
            </p>
            <p>
              <label className="label">
                Email
                <br />
                <input
                  className="input"
                  type="email"
                  name="email"                 
                />
              </label>
            </p>
            <p>
              <label className="label">
                Phone
                <br />
                <input
                  className="input"
                  type="tel"
                  name="phone"                 
                />
              </label>
            </p>
            <p>
              <label className="label">
                Subject
                <br />
                <input
                  className="input"
                  type="text"
                  name="subject"                 
                />
              </label>
            </p>
            <p>
              <label className="label">
                Message
                <br />
                <textarea
                  className="textarea"
                  name="message"                 
                />
              </label>
            </p>
            <br />
            <p>
              <button className="button is-primary" type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
      <Map />
    </section>
  );
}

const foo = graphql`
  query Contact {
    site {
      siteMetadata {
        instagram
      }
    }
  }
`;
