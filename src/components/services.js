import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

const baseUrl =
  "https://my.setmore.com/bookingpage/ea817af3-1a80-4576-ab9f-f85faaab79a2/";

// function toggleModal(id) {
//   document.querySelector("#booking-modal-" + id).classList.toggle("is-active");
// }

const Classes = [
  {
    key: "4ccbc113-a5c5-46db-b121-fd7280542e50",
    id: "4ccbc113-a5c5-46db-b121-fd7280542e50",
    cost: 6,
    duration: 60,
    service_name: "Bootcamp",
    image: "../images/barbells.jpg",
  },
];

const Services = () => {
  return (
    <StaticQuery
      query={graphql`
        query ServicesQuery {
          allServices {
            nodes {
              id
              key
              duration
              service_name
              cost
              remoteImage {
                childImageSharp {
                  id
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="section container">
          <h1 className="title has-text-light">Plans &amp; Services</h1>
          <div className="container has-text-centered">
            <div className="columns is-multiline  is-centered">
              {Classes.map((c) => {
                const { key, service_name, duration, cost, description } = c;
                const url = baseUrl + "class/" + key;
                return (
                  <div key={key} className="column is-4">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image">
                          <StaticImage
                            src="../images/circuits.jpg"
                            alt={service_name}
                            width="400"
                            height="400"
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <h2 className="title is-3">{service_name}</h2>
                        <h3 className="subtitle is-4">
                          Runtime: {duration}mins
                          <br />
                          {cost > 0 ? `£${cost}` : "Free"}
                        </h3>
                        <p className="is-success">{description}</p>
                        <br />
                        {url !== undefined && url !== "" && (
                          <a
                            className="button is-primary"
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Book Now
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {data.allServices.nodes.map((service) => {
                const { key, service_name, duration, cost, description } =
                  service;
                const url = baseUrl + "services/" + key;
                const image = getImage(service.remoteImage);
                return (
                  <div key={key} className="column is-4">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image">
                          <GatsbyImage
                            image={image}
                            alt={service_name}
                            width="400"
                            height="400"
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <h2 className="title is-3">{service_name}</h2>
                        <h3 className="subtitle is-4">
                          Runtime: {duration}mins
                          <br />
                          {cost > 0 ? `£${cost}` : "Free"}
                        </h3>
                        <p className="is-success">{description}</p>
                        {/* <br />
                        {url !== undefined && url !== "" && (
                          <a
                            className="button is-primary"
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Book Now
                          </a>
                        )} */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Services;
