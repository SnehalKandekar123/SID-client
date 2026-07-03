import { Link } from "react-router-dom";
import "./SafetyMaterial.css";

import hero from "../assets/safetymain.jfif";

import helmet from "../assets/safetytool.PNG";
import gloves from "../assets/safety2.PNG";
import shoes from "../assets/safetytool4.PNG";
import jacket from "../assets/safetytool1.PNG";

function SafetyMaterial() {

  const products = [
    {
      image: helmet,
      title: "Safety Helmet",
      desc: "High-quality industrial safety helmet for head protection."
    },
    {
      image: gloves,
      title: "Safety Gloves",
      desc: "Durable gloves designed for mechanical and industrial work."
    },
    {
      image: shoes,
      title: "Safety Shoes",
      desc: "Steel-toe safety shoes with anti-slip sole."
    },
    {
      image: jacket,
      title: "Reflective Jacket",
      desc: "High-visibility jacket for construction and roadside workers."
    }
  ];

  return (
    <>
      <section className="safety-banner">

        <div className="container">

          <Link
            to="/Categories"
            className="btn btn-light back-btn mb-4"
          >
            ← Back
          </Link>

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1>Safety Material</h1>

              <p>
                Our industrial safety products provide complete protection for
                employees working in factories, construction sites, warehouses,
                and manufacturing industries.
              </p>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src={hero}
                alt="Safety"
                className="hero-image img-fluid"
              />

            </div>

          </div>

        </div>

      </section>

      <section className="product-section">

        <div className="container">

          <h2 className="section-title">
            Safety Products
          </h2>

          <div className="row">

            {products.map((item, index) => (

              <div
                className="col-lg-3 col-md-6 mb-4"
                key={index}
              >

                <div className="card product-card">

                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                  />

                  <div className="card-body">

                    <h5>{item.title}</h5>

                    <p>{item.desc}</p>

                   <Link
  to="/contact"
  className="btn btn-primary w-100"
>
  Enquiry Now
</Link>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}

export default SafetyMaterial;