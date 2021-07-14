import * as React from "react"
import "../styles/main.scss";
import { Layout, Navbar } from "../components";
// import { Link } from "gatsby";
import aboutPic from "../images/Major_series.webp";

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-head"><Navbar /></div>
        <div className="hero-body is-secondary">
          <div className="columns">
            <div className="column ">
              <figure className="image is-16by9">
                <iframe
                  title="Welcome Video"
                  className="has-ratio"
                  width="640"
                  height="360"
                  src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </figure>
            </div>
            <div className="column content">
              <p className="title is-accent">
                YOUR FITNESS JOURNEY BROUGHT TO YOU LOCALLY
              </p>
              <p className="subtitle">Are you looking for a place to train that's walking distance from your home in Pease Pottage?<br />
                Are you tired of fighting for gym equipment at you local gym?<br />
                Are you looking to meet some locals whilst getting fit?<br />
                Luke and I can help you get the fitness results you are looking for through 20 years of combined experience within the fitness industry.</p>
            </div>
          </div>
        </div>

      </section>
      <main>
        <section id="about" className="section">
          <section id="about">
            <div className="columns">
              <div className="column">
                <h2 className="title">About</h2>
                <figure className="image is-128x128 is-align-content-center">
                  <img className="is-rounded" src={aboutPic} alt="Jane and Luke" />
                </figure>
                <p>Looking for professional, certified fitness coaches that can offer you a tailor-made plan that is right for you?
                  Or perhaps you're looking to meet some locals whilst training in the fresh outdoors, come rain or shine?
                  With almost 20 years combined experience in fitness, Luke and Jane will help you reach your goals be it: longevity, health, fat loss, muscle gain, performance, fitness, nutrition (and more!) through sharing knowledge, correction of technique and structured training to maximise your results.</p>
                <button className="button">Contact</button>
              </div>
            </div>
          </section>
        </section>
        <section id="contact" className="section">
          <div className="columns m-4">
            <div className="column">
              <h2 className="title">Get Started</h2>
              <p>The Green at Woodgate<br />
                Woodgate<br />
                Pease Pottage<br />
                West Sussex<br />
                RH11 9GX</p>
            </div>
            <div className="column">
              <form>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="text" placeholder="Address" value="" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="Email Address" value="" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p className="help is-danger">This email is invalid</p>
                </div>
                <div className="field">
                  <label className="label">Phone</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="01293 xxxxxx" value="" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p className="help is-danger">This email is invalid</p>
                </div>

                <div className="field">
                  <label className="label">Subject</label>
                  <input className="input" type="text" placeholder="Subject" value="" />
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Message..."></textarea>
                  </div>
                </div>
                {/* 
                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" />
                      I agree to the <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div> */}

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button">Submit</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
