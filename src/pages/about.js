import * as React from "react";
import "../styles/main.scss";
import { Layout, Navbar } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout>
      <Navbar />
      <main className="container mt-6">
        <h1 className="title has-text-light">About</h1>
        <section id="luke" className="section columns">
          <div className="column">
            <StaticImage
              src="../images/luke-collage.jpg"
              loading="eager"
              alt="Logo"
              width={761}
              height={507}
              placeholder="blurred"
              layout="constrained"
              imgClassName="image"
            />
          </div>
          <div className="column content">
            <h1 className="title has-text-light">Luke</h1>
            <p>
              Will be primary personal trainer. Having grown up in a house-hold,
              always watching any sport, getting fit and helping others achieve
              their health goals has always been at the forefront of Lukes mind.
              He listens to the clients needs and always has this at the
              forefront of his mind to ensure the clients end goal is met.{" "}
              <br />
              Luke has a keen eye for any instabilities in movements, and won’t
              let you shy away from them. He’s known for both his understanding
              and gentle nature with clients as much so as pushing clients to
              limits they never thought they would achieve before by assessing
              your every move in a session and capabilities, striving for you to
              become 1% better each day.
            </p>
            <article className="message">
              <div className="message-body">
                “Training with Luke is always a pleasure, the exercises are hard
                but never impossible as they are tailored to my needs and
                abilities. There is also an element of fun, and any failings on
                my behalf are worked on,with perseverance,humour and
                encouragement until they become achievable successes. I have
                found myself carrying out exercises which were previously beyond
                my capabilities under Luke's tutelage.” – Alex R
              </div>
            </article>

            <p>
              Luke’s well versed in weight loss, strength gain, sports specific
              training and running programming. He looks forward to meeting you
              soon.
            </p>
          </div>
        </section>
        <hr />
        <section id="jane" className="section columns">
          <div className="column">
            <StaticImage
              src="../images/jane-collage.jpg"
              loading="eager"
              alt="Logo"
              width={761}
              height={507}
              placeholder="blurred"
              layout="constrained"
              imgClassName="image"
            />
          </div>
          <div className="column">
            <h1 className="title has-text-light">Jane</h1>
            <p>
              She’s been named many names in her days - <br />
              Drill sergeant, evil, b*’$h, sweet heart, fidget pants, life
              saver… just to name a few.
              <br />
              Jane is known for her bubbly outgoingness and passion. She has
              gone through a lot of motions in life including weight loss,
              Crossfit competitions, injuries and performance training. <br />
              She is somewhat of a technique fiend and will find areas you
              didn’t even realise are weaknesses or that need slight
              alterations. <br />
              Jane is of a football background from her childhood and abandoned
              this due to injuries, but found passion in assisting others in
              achieving their fitness goals through HIIT, spin, bootcamps and
              Personal Training. With a full-time job, Jane’s primary focus is
              on improving the website, being the customer face of the business
              and contact, as well as primary coach for Bootcamps and online
              programming. Strengths: SAQ (Speed Agility Quickness), Sport
              focus, weight lifting, metabolic training, spin.
            </p>
          </div>
        </section>
        <section id="both" className="section columns">
          <div className="column">
            <StaticImage
              src="../images/both-collage.jpg"
              loading="eager"
              alt="Logo"
              width={761}
              height={507}
              placeholder="blurred"
              layout="constrained"
              imgClassName="image"
            />
          </div>
          <div className="column">
            <p>
              Well… you’ve got to know some background about us together also,
              right? <br />
              We have been together since 2014 – we’ve travelled to quite a few
              places to explore through our common interests of all things food
              and fitness.
              <br />
              We’ve done our fair share of fitness events now:{" "}
              <span
                class="has-tooltip-arrow"
                data-tooltip="Clapham Common &amp; South Downs"
              >
                Rough Runner
              </span>
              ,{" "}
              <span class="has-tooltip-arrow" data-tooltip="Hever Castle x2">
                Commando Series
              </span>
              ,{" "}
              <span
                class="has-tooltip-arrow"
                data-tooltip="Pippingford Park, Oslo &amp; Copenhagen"
              >
                Toughest
              </span>{" "}
              and Spartan Series to name a few.
              <br />
              We do genuinely love food.
              <br />
              You won’t often see us training together as our training styles
              and goals are very different, as are most peoples goals! But we
              enjoy sharing how our sessions went at the end of the day.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
