import { Link } from "react-router-dom";
import "./PackagingMaterial.css";

import hero from "../assets/PACKAGING MATERIALPNG.PNG";

import box from "../assets/PACKAGING MATERIALPNG.PNG";
import bubble from "../assets/packaging1.PNG";
import tape from "../assets/packaging2.PNG";
import stretch from "../assets/Packagingmaterial1.PNG";

function PackagingMaterial() {

  const products = [
   {
    image: box,
    title: "Packaging Materials",
    desc: "Stretch film, air bubble bags, PP sheets, edge protectors and industrial packaging materials."
  },
    {
    image: bubble,
    title: "Adhesive Tapes",
    desc: "BOPP tapes, masking tapes, colour coding tapes, insulation tapes and double-sided tapes."
  },
     {
    image: tape,
    title: "Lashing & Ratchet Accessories",
    desc: "Ratchet buckles, wire hooks, lashing clips and cargo securing accessories."
  },
     {
    image: stretch,
    title: "Strapping Accessories",
    desc: "Steel seals, PP strapping tools, tensioners and packaging accessories."
  }
  ];

  return (
    <>
      <section className="packaging-banner">

        <div className="container">

          <Link
            to="/Categories"
            className="btn btn-light back-btn mb-4"
          >
            ← Back
          </Link>

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1>Packaging Material</h1>

              <p>
                We provide premium packaging solutions that protect products
                during storage, transportation, and delivery. Our materials are
                trusted by industries for strength, durability, and reliability.
              </p>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src={hero}
                alt="Packaging Material"
                className="hero-image img-fluid"
              />

            </div>

          </div>

        </div>

      </section>

      <section className="product-section">

        <div className="container">

          <h2 className="section-title">
            Packaging Products
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

export default PackagingMaterial;