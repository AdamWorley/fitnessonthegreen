import React from "react";
import weights from "../images/weights.webp";
import henchJane from "../images/henchJane.webp";
import outdoorFitness from "../images/outdoorFitness.webp";

const services = [
  {
    title: "Online Coaching",
    image: { src: weights, alt: "Dumbbells" },
    days: [],
    runtime: 1,
    price: "",
    description:
      "Something about online coaching: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt, at fugit suscipit vero temporibus. Nihil doloremque, veritatis tempore vero ad corporis. Aliquid velit ullam voluptatum, nemo aperiam possimus assumenda.",
  },
  {
    title: "Bootcamp",
    image: { src: outdoorFitness, alt: "People exercising outside" },
    days: ["Wed, Sat, Sun"],
    runtime: 1,
    price: "Price varies",
    description:
      "Something about bootcamp: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt, at fugit suscipit vero temporibus. Nihil doloremque, veritatis tempore vero ad corporis. Aliquid velit ullam voluptatum, nemo aperiam possimus assumenda.",
  },
  {
    title: "One-off 1-2-1 Personal Training",
    image: { src: henchJane, alt: "Jane being hench" },
    days: [],
    runtime: 1,
    price: "",
    description:
      "Something about One-off 1-2-1 Personal Training: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt, at fugit suscipit vero temporibus. Nihil doloremque, veritatis tempore vero ad corporis. Aliquid velit ullam voluptatum, nemo aperiam possimus assumenda.",
  },
];

export default function Services() {
  return (
    <section className="section container">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          {services.map((service) => {
            const { title, runtime, price, description } = service;
            const { src, alt } = service.image;
            return (
              <div class="column is-4">
                <div class="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={src} alt={alt} />
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2 className="title is-3">{title}</h2>
                    <h3 className="subtitle is-4">
                      Runtime: {runtime}hrs
                      <br />
                      {price}
                    </h3>
                    <p class="is-success">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
