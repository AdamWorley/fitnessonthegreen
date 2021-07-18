import React from "react";
import weights from "../images/weights.webp";
import henchJane from "../images/henchJane.webp";
import outdoorFitness from "../images/outdoorFitness.webp";

const baseUrl =
  "https://my.setmore.com/bookingpage/71a5ece2-2c43-458c-bcab-73b4cc97a55e/services/";
const services = [
  {
    key: "s86a75060eb4a45931687c0534ad7dfc0e55c65bf",
    service_name: "One-off 1-2-1 Personal Training",
    staff_keys: ["xxxxx"],
    duration: 60,
    buffer_duration: 0,
    cost: 100,
    currency: "USD",
    image_url: henchJane,
    description: "One on one pt session",
  },
  {
    key: "s6dd7c3a116d9b70301da1a1f33e175eb25db0952",
    service_name: "Nutrition",
    staff_keys: [],
    duration: 20,
    buffer_duration: 10,
    cost: 200,
    currency: "USD",
    image_url: weights,
    description: "Advice for diet and nutrition to suit you",
  },
  // {
  //   key: "None",
  //   service_name: "None",
  //   staff_keys: [],
  //   duration: 20,
  //   buffer_duration: 10,
  //   cost: 200,
  //   currency: "USD",
  //   image_url: outdoorFitness,
  //   description: "service 2 description",
  // },
];

function toggleModal(id) {
  document.querySelector("#booking-modal-" + id).classList.toggle("is-active");
}

const Services = () => {
  return (
    <section className="section container">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          {services.map((service) => {
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
              <div key={key} className="column is-4">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={image_url}
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
                    <div id={"booking-modal-" + key} className="modal">
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
                            className="has-ratio"
                            width="500"
                            height="800"
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
  );
};

export default Services;
