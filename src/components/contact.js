import React from "react";
import { navigate } from "gatsby-link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
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
          {/* <h2 className="title">Contact</h2>
          <p>
            Tel: <a href="tel:07498321545">07498 321545</a>
          </p> */}
          <h2 className="title">Get Started</h2>
          <p>
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
          {/* <div>
            {typeof window !== "undefined" && (
              <MapContainer
                center={[51.08398886601107, -0.1929794649752272]}
                zoom={13}
                style={{ height: "400px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.08398886601107, -0.1929794649752272]}>
                  <Popup>The green, Woodgate.</Popup>
                </Marker>
              </MapContainer>
            )}
          </div> */}
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
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label className="label" htmlFor="name">
                Name
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={handleChange}
                />
              </label>
              <div className="control"></div>
            </div>
            <div className="field">
              <label className="label" htmlFor="address">
                Address
                <input
                  id="address"
                  className="input is-success"
                  type="text"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </label>
              <div className="control has-icons-left has-icons-right">
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  {/* <i className="fas fa-check"></i> */}
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="control has-icons-left has-icons-right">
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  {/* <i className="fas fa-exclamation-triangle"></i> */}
                </span>
              </div>
              {/* <p className="help">This email is invalid</p> */}
            </div>
            <div className="field">
              <label className="label" htmlFor="phone">
                Phone
                <input
                  id="phone"
                  className="input"
                  type="tel"
                  placeholder="01293 xxxxxx"
                  onChange={handleChange}
                />
              </label>
              <div className="control has-icons-left has-icons-right">
                <span className="icon is-small is-left">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="icon is-small is-right">
                  {/* <i className="fas fa-exclamation-triangle"></i> */}
                </span>
              </div>
              {/* <p className="help">This email is invalid</p> */}
            </div>

            <div className="field">
              <label className="label" htmlFor="subject">
                Subject
                <input
                  id="subject "
                  className="input"
                  type="text"
                  placeholder="Subject"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="field">
              <label className="label" htmlFor="message">
                Message
                <div className="control">
                  <textarea
                    id="message"
                    className="textarea"
                    placeholder="Message..."
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </label>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
