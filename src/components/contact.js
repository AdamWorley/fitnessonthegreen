import React from "react";
import { navigate } from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";
import { Map } from "../components";
import { FaInstagram, FaPhone, FaEnvelope, FaMobileAlt } from "react-icons/fa";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const { site } = useStaticQuery(foo);

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

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
        </div>
        <div className="column">
          <form
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label className="label">
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
