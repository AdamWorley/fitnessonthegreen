import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Contact, Layout, Navbar, Services } from "../components";
import "../styles/main.scss";
import { useStaticQuery, graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const IndexPage = () => {
  const homeContentQuery = useStaticQuery(graphql`
    {
      allContentfulLayout(filter: { slug: { eq: "home" } }) {
        nodes {
          contentModules {
            ... on ContentfulCtaSection {
              title
              localLink
              body {
                raw
              }
            }
            ... on ContentfulLayoutHeroImage {
              headline
              title
              subTitle {
                subTitle
              }
            }
          }
        }
      }
    }
  `);

  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  const aboutSectionRichText =
    homeContentQuery.allContentfulLayout.nodes[0].contentModules.find(
      (x) => x.title === "About"
    ).body;

  const hero =
    homeContentQuery.allContentfulLayout.nodes[0].contentModules.find(
      (x) => x.title === "Home > Hero"
    );

  return (
    <Layout>
      <Navbar />
      <section className="hero">
        <div className="hero-head ">
        </div>
        <div className="hero-body ">
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
              <p className="title is-family-secondary has-text-centered has-text-white">
                {hero.headline}
              </p>
              <p className="content" style={{ whiteSpace: "pre-line" }}>
                {hero.subTitle.subTitle}
              </p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section id="about-section" className="section">
          <div className="columns is-centered">
            <div className="column is-half has-text-centered">
              <h2 className="title ">
                {
                  homeContentQuery.allContentfulLayout.nodes[0].contentModules.find(
                    (x) => x.title === "About"
                  ).title
                }
              </h2>
              <p className="is-size-5">
                {aboutSectionRichText &&
                  renderRichText(aboutSectionRichText, options)}
              </p>
              <a className="button is-primary" href="#contact">
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
