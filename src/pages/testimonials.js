import * as React from "react";
import "../styles/main.scss";
import { FaEnvelope } from "react-icons/fa";
import { Layout, Navbar } from "../components";
import { useStaticQuery, graphql } from "gatsby";

const TestimonialsPage = () => {
  const testimonialsQuery = useStaticQuery(graphql`
    {
      allContentfulTestimonials {
        edges {
          node {
            testimonials {
              name
              message {
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
          <h1 className="title">Testimonials</h1>
          <div className="container">
            {testimonialsQuery.allContentfulTestimonials.edges[0].node.testimonials.map((testimonial) => {
              return (
                <article key={testimonial.name} className="message">
                  <div className="message-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: testimonial.message.childMarkdownRemark.html,
                      }}
                    ></p>
                  </div>
                  <div className="message-header">
                    <p> - {testimonial.name}</p>
                    {/* <button class="delete" aria-label="delete"></button> */}
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

export default TestimonialsPage;
