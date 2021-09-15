import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Contact, Layout, Navbar, Services } from "../components";
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body is-secondary">
          <div className="columns is-vcentered">
            <div className="column is-centered">
              <figure className="image center">
                <StaticImage
                  src="../images/jump.jpg"
                  alt="Having fun with fitness"
                  width="480"
                  height="640"
                />
              </figure>
            </div>
            <div className="column content is-half">
              <p className="title is-family-secondary has-text-centered is-accent">
                YOUR FITNESS JOURNEY BROUGHT TO YOU LOCALLY
              </p>
              <p className="content">
                Are you looking for a place to train that's walking distance
                from your home in Pease Pottage?
                <br />
                Are you tired of fighting for gym equipment at your local gym?
                <br />
                Are you looking to meet some locals whilst getting fit?
                <br />
                I can help you get the fitness results you are looking
                for through 20 years of combined experience within the fitness
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section id="about" className="section">
          <div className="columns is-centered">
            <div className="column is-half has-text-centered">
              <h2 className="title ">About</h2>
              {/* <figure className="image center">
                <StaticImage
                  imgClassName="is-rounded"
                  src="../images/jane-collage.jpg"
                  alt="Jane and Luke"
                  width={300}
                  height={300}
                />
              </figure> */}
              <p className="is-size-5">
                Looking for professional, certified fitness coaches that can
                offer you a tailor-made plan that is right for you? <br />
                Or perhaps you're looking to meet some locals whilst training in
                the fresh outdoors, come rain or shine? <br />
                With over hald a decade of experience in fitness, Jane will help you reach your goals be it: longevity, health,
                fat loss, muscle gain, performance, fitness, nutrition (and
                more!) through sharing knowledge, correction of technique and
                structured training to maximise your results.
              </p>
              <a className="button" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>
        <Contact />

        <Services />
      </main>
    </Layout>
  );
};

export default IndexPage;
