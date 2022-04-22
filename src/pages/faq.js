import * as React from "react";
import "../styles/main.scss";
import { FaEnvelope } from "react-icons/fa";
import { Layout, Navbar } from "../components";
import { useStaticQuery, graphql } from "gatsby";

const FaqPage = () => {
  const faqsQuery = useStaticQuery(graphql`
    {
      allContentfulFaQs {
        edges {
          node {
            title
            faqs {
              question
              answer {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Navbar />
      <div className="has-white-background">
      <main className="container pt-6">
        <section className="content">
          <h1 className="title">FAQs</h1>
          <div className="container">
            {faqsQuery.allContentfulFaQs.edges[0].node.faqs.map((faq) => {
              return (
                <article key={faq.question} className="message">
                  <div className="message-header">
                    <p>{faq.question}</p>
                    {/* <button class="delete" aria-label="delete"></button> */}
                  </div>
                  <div className="message-body ">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: faq.answer.childMarkdownRemark.html,
                      }}
                    ></p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="section">
          <p className="is-size-4 has-text-black">
            Any other queries, please do feel free to email us at &nbsp;
            <a href="mailto:contact@fitonthegreen.co.uk">
              <FaEnvelope />
              &nbsp; contact@fitonthegreen.co.uk
            </a>
          </p>
        </section>
      </main>
      </div>
    </Layout>
  );
};

export default FaqPage;
