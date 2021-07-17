import React from "react";
import weights from "../images/weights.webp";
import henchJane from "../images/henchJane.webp";
import outdoorFitness from "../images/outdoorFitness.webp";

const services = [
  {
    title: "Online Coaching",
    img: { src: weights, alt: "Dumbbells", width: 400, height: 400 },
    days: [],
    runtime: 1,
    price: "",
    description:
      "Something about online coaching: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt, at fugit suscipit vero temporibus. Nihil doloremque, veritatis tempore vero ad corporis. Aliquid velit ullam voluptatum, nemo aperiam possimus assumenda.",
    url: "",
  },
  {
    title: "Bootcamp",
    img: {
      src: outdoorFitness,
      alt: "People exercising outside",
      width: 400,
      height: 400,
    },
    days: ["Wed, Sat, Sun"],
    runtime: 1,
    price: "Price varies",
    description:
      "Something about bootcamp: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt, at fugit suscipit vero temporibus. Nihil doloremque, veritatis tempore vero ad corporis. Aliquid velit ullam voluptatum, nemo aperiam possimus assumenda.",
    // url: "http://my.setmore.com/bookingpage/71a5ece2-2c43-458c-bcab-73b4cc97a55e/class/591edd76-64b3-4839-b6a6-3bada6169586",
    url: "",
  },
  {
    title: "One-off 1-2-1 Personal Training",
    img: { src: henchJane, alt: "Jane being hench", width: 400, height: 400 },
    days: [],
    runtime: 1,
    price: "",
    description:
      "Something about One-off 1-2-1 Personal Training: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt, at fugit suscipit vero temporibus. Nihil doloremque, veritatis tempore vero ad corporis. Aliquid velit ullam voluptatum, nemo aperiam possimus assumenda.",
    url: "",
  },
];

const Services = () => {
  return (
    <section className="section container">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          {services.map((service) => {
            const { title, runtime, price, description, url } = service;
            const { src, alt, width, height } = service.img;
            return (
              <div className="column is-4">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={src} alt={alt} width={width} height={height} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h2 className="title is-3">{title}</h2>
                    <h3 className="subtitle is-4">
                      Runtime: {runtime}hrs
                      <br />
                      {price}
                    </h3>
                    <p className="is-success">{description}</p>
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
        </div>
      </div>
    </section>
  );
};

export default Services;
