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
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your name:
                <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:
                <br />
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:
                <br />
                <textarea name="message" onChange={handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
