import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Layout, Navbar } from "../components";
import "../styles/main.scss";

const AboutPage = () => {
  return (
    <Layout>
      <Navbar />
      <main className="container mt-6">
        {/* <h1 className="title has-text-light">About Jane</h1> */}
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
            <h1 className="title has-text-light">About Jane</h1>
            <p>Jane listens to the clients needs and always has this at the forefront of her mind to ensure the clients end goal is met.<br />
              Jane has a keen eye for any instabilities in movements, and won’t let you shy away from them as she is quite the technique fiend.<br />
              She will ensure you are pushing to limits you never thought you would achieve before, by assessing your every move in a session and capabilities, striving to help you become 1% fitter and healthier each day, and will only take on clients who align with her skillset.
            </p><br />
            <p>
              She’s been named many names in her days - <br />
              Drill sergeant, evil, b*’$h, sweet heart, fidget pants, life
              saver… just to name a few, and is forever known for her bubbly outgoingness and passion for helping others.
            </p><br />
            <p>
              She has personally gone through a lot of motions in life including weight loss, Crossfit competitions, injuries and performance training.
            </p><br />
            <p>
              Jane is of a football background from her childhood and abandoned
              this due to injuries, but found passion in assisting others in
              achieving their fitness goals through HIIT, spin, bootcamps and
              Personal Training.
            </p><br />
            <p>
              Jane has a full-time office job which she pairs with the Bootcamps, Personal Training Clients, Online programming clients, website and socials manager for at FitOnTheGreen. She runs this with the community at Woodgate (Pease Pottage), to share her knowledge and passion with residents as well as locals to help keep everyone active.
              With this in mind - Jane will book a consultation with you to assess whether not only Personal Training is right for you, but also if she feels her skillset aligns with what you require from a Personal Trainer.
            </p><br />
            <p>
              Jane enjoys travelling to quite a few places for different fitness events such as Rough Runner, Commando Series, Toughest and Spartan Series to name a few, and hopes to one day be able to invite Bootcamp attendees and Clients to also join on fitness adventures!
            </p><br />
            <p>
              Jane genuinely loves food and shares this passion of fitness and food with her fiance Luke who is a Personal Trainer at Nuffield Health Crawley Central. You won’t often see them training together as training styles and goals are very different, as are most peoples!
            </p><br />
            <p>Strengths: Weight loss, fat loss, SAQ (Speed Agility Quickness), Sport focus, weight lifting, Olympic lifting, metabolic training, spin, HIIT.
            </p><br />
            <p>Qualifications: SAQ, L2 Fitness, L3 Personal Training, Bootcamp &amp; Circuits, Kettlebells, TRX, V-Cycle.</p><br />
            <p>Book a free consultation for Personal Training by emailing: <a href="mailto:Contact@Fitonthegreen.co.uk">Contact@Fitonthegreen.co.uk.</a></p><br/>
            <p>To book a free Bootcamp trial session, email: <a href="mailto:Contact@Fitonthegreen.co.uk">Contact@Fitonthegreen.co.uk.</a></p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
