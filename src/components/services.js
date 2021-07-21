import React from "react";
import { StaticQuery, graphql } from "gatsby";

const baseUrl =
  "https://my.setmore.com/bookingpage/ea817af3-1a80-4576-ab9f-f85faaab79a2/services/";

function toggleModal(id) {
  document.querySelector("#booking-modal-" + id).classList.toggle("is-active");
}

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
              image_url
            }
          }
        }
      `}
      render={(data) => (
        <section className="section container">
          <h1 className="title has-text-light">Plans &amp; Services</h1>
          <div className="container has-text-centered">
            <div className="columns is-multiline  is-centered">
              {data.allServices.nodes.map((service) => {
                const {
                  key,
                  service_name,
                  duration,
                  cost,
                  image_url,
                  description,
                } = service;
                const url = baseUrl + key;
                return (
                  <div id={key} className="column is-4">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image">
                          <img
                            src={
                              image_url ??
                              `https://source.unsplash.com/random/400x400/?fitness,gym,${key}`
                            }
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
                          &pound;{cost}
                        </h3>
                        <p className="is-success">{description}</p>
                        <br />
                        {url !== undefined && url !== "" && (
                          <button
                            className="button is-primary"
                            onClick={() => toggleModal(key)}
                          >
                            Book Now
                          </button>
                        )}
                        <div
                          id={"booking-modal-" + key}
                          className="modal is-clipped"
                        >
                          <div className="modal-background"></div>
                          <div className="modal-card">
                            <header className="modal-card-head">
                              <p className="modal-card-title has-text-white">
                                Booking - {service_name}
                              </p>
                              <button
                                className="delete"
                                aria-label="close"
                                onClick={() => toggleModal(key)}
                              ></button>
                            </header>
                            <div className="modal-card-body">
                              <iframe
                                title={service_name}
                                width="100%"
                                height="600"
                                src={url}
                                frameBorder="0"
                              />
                            </div>
                            <button
                              className="modal-close is-large"
                              aria-label="close"
                              onClick={() => toggleModal(key)}
                            ></button>
                          </div>
                        </div>
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
