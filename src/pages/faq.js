import * as React from "react";
import "../styles/main.scss";
import { Layout, Navbar } from "../components";
import terms from "../documents/terms.pdf";
import PARQ from "../documents/PARQ.pdf";

const faqs = [
  {
    question: "Why us? ",
    answer:
      "Well, if you’ve thought about supporting local, then why not support us. We are a local couple who live on the Woodgate development and have always talked about starting our own business but never dared take the leap. We are both very enthusiastic about fitness and helping others. Come down to one of our Bootcamp sessions or book a consultation with us and we will listen to what you need to help you achieve your goals.",
  },
  {
    question: "Why PT?",
    answer:
      "There are multiple reasons someone would consider PT.. anything ranging from being a complete novice and wanting to know where to even begin, to someone whos lost their way and needs a bit of ‘oomph’ put back into their sessions to make them more interesting, to those who have excelled and now plateauing and anything inbetween. As Personal Trainers, Luke and Jane will go through a consultation with you to help us all see what the underlying push factors are to why you wish to achieve the goal you have set your eyes on. We use the time to better understand your natural movements, correct any instabilities, focus on problem areas to strengthen them alongside any already established areas to help you become a well-rounded healthy athlete. No one person has the exact same goal and body build as another person which is why the Personal is added to the training with us, making sure your programme is unique to you.",
  },
  {
    question: "What will I see?",
    answer:
      "It is true what they say, if you stick to a reasonable training plan: it takes 21 days to build a habit, 4-weeks marks you seeing a difference physically in your body, 8-weeks until your nearest and dearest see a difference, 12-weeks for the world to see a difference. Therefore, we do recommend that you follow a structured training plan. Our Bootcamps ensure that you have a well rounded 1-hour fitness session with us, tailored to all fitness abilities. If you need more of a personal touch, then personal training is for you. This will allow you to not only have a physical target, but also nutritional advice set out by your coach to help you achieve your goals. You will see a difference if you apply consistency to your nutrition and training. The accountability factor of having a coach will aid you in achieving your goals.",
  },
  {
    question: "How long should I PT for?",
    answer:
      "We always recommend a minimum of 3-months to allow you to see any difference. Any less than this doesn’t allow adequate enough time for your body to adjust to the training plans or for you to see the difference. Remember, it takes 12 weeks for the world to see a difference if you are sticking to your targets!",
  },
  {
    question: "Is PT for me?",
    answer:
      "Book a free no obligation consultation with Luke or Jane by emailing us on contact@fitonthegreen.co.uk to discuss and find out!",
  },
  {
    question: "How do I get started?",
    answer: `It\'s really easy and we\'re here to help you with whatever you need! Just make sure to fill out the <a href=${PARQ} target="_blank" rel="noreferrer">physical fitness form</a> and check out our <a href=${terms} target="_blank" rel="noreferrer"> T&amp;Cs</a>`,
  },
];

const FaqPage = () => {
  return (
    <Layout>
      <Navbar />
      <main className="container">
        <section className="content">
          <h1 className="title has-text-light">FAQs</h1>
          <div className="container">
            {faqs.map((faq) => {
              return (
                <article key={faq.question} className="message">
                  <div className="message-header has-text-light">
                    <p>{faq.question}</p>
                    {/* <button class="delete" aria-label="delete"></button> */}
                  </div>
                  <div className="message-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: faq.answer,
                      }}
                    ></p>
                  </div>
                </article>
              );
            })}
            Any other queries, please do feel free to email us on &nbsp;
            <a href="mailto:contact@fitonthegreen.co.uk">
              contact@fitonthegreen.co.uk
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FaqPage;
