import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section m-5 has-background-white has-text-black"
    >
      <div className="columns m-4 is-vcentered">
        <div className="column is-half">
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
        </div>
        <div className="column">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label className="label" htmlFor="name">
                Name
              </label>
              <div className="control">
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="address">
                Address
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  id="address"
                  className="input is-success"
                  type="text"
                  placeholder="Address"
                />
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
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="Email Address"
                  required
                />
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
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  id="phone"
                  className="input"
                  type="tel"
                  placeholder="01293 xxxxxx"
                />
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
              </label>
              <input
                id="subject "
                className="input"
                type="text"
                placeholder="Subject"
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="message">
                Message
              </label>
              <div className="control">
                <textarea
                  id="message"
                  className="textarea"
                  placeholder="Message..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button" type="submit">
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
