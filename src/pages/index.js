import * as React from "react";
import "../styles/main.scss";
import { Layout, Navbar, Services } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body is-secondary">
          <div className="columns is-vcentered">
            <div className="column ">
              <figure className="image">
                <StaticImage src="../images/outdoorFitness.webp" alt="" />
              </figure>
            </div>
            <div className="column content is-half">
              <p className="title is-family-secondary has-text-centered is-accent">
                YOUR FITNESS JOURNEY BROUGHT TO YOU LOCALLY
              </p>
              <p className="subtitle has-text-centered content">
                Are you looking for a place to train that's walking distance
                from your home in Pease Pottage?
                <br />
                Are you tired of fighting for gym equipment at your local gym?
                <br />
                Are you looking to meet some locals whilst getting fit?
                <br />
                Luke and I can help you get the fitness results you are looking
                for through 20 years of combined experience within the fitness
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section id="about" className="section">
          <section id="about">
            <div className="columns is-centered">
              <div className="column is-half has-text-centered">
                <h2 className="title ">About</h2>
                <figure className="image is-128x128 center">
                  <StaticImage
                    imgClassName="is-rounded"
                    src="../images/Major_series.webp"
                    alt="Jane and Luke"
                  />
                </figure>
                <p className="content">
                  Looking for professional, certified fitness coaches that can
                  offer you a tailor-made plan that is right for you? <br />
                  Or perhaps you're looking to meet some locals whilst training
                  in the fresh outdoors, come rain or shine? <br />
                  With almost 20 years combined experience in fitness, Luke and
                  Jane will help you reach your goals be it: longevity, health,
                  fat loss, muscle gain, performance, fitness, nutrition (and
                  more!) through sharing knowledge, correction of technique and
                  structured training to maximise your results.
                </p>
                <button className="button">Contact</button>
              </div>
            </div>
          </section>
        </section>
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
        <Services />
      </main>
    </Layout>
  );
};

export default IndexPage;
