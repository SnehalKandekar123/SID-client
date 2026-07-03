import { Link } from "react-router-dom";
import "./StationeryMaterial.css";

import hero from "../assets/stationarymain.jfif";

import register from "../assets/stationary1.PNG";
import pen from "../assets/stationary.PNG";
import folder from "../assets/stationary2.PNG";
import calculator from "../assets/stationary3.PNG";

function StationeryMaterial() {

  const products = [
    {
      image: register,
      title: "Office Register",
      desc: "Premium quality registers for office records and documentation."
    },
    {
      image: pen,
      title: "Ball Pen",
      desc: "Smooth writing pens suitable for offices, schools, and businesses."
    },
    {
      image: folder,
      title: "File Folder",
      desc: "Durable file folders for organizing important documents."
    },
    {
      image: calculator,
      title: "Notice Board",
      desc: "Reliable calculators for office, accounting, and educational use."
    }
  ];

  return (
    <>
      <section className="stationery-banner">

        <div className="container">

          <Link
            to="/Categories"
            className="btn btn-light back-btn mb-4"
          >
            ← Back
          </Link>

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1>Stationery Material</h1>

              <p>
                We offer a complete range of office stationery products to
                support your daily business operations. Our products combine
                quality, durability, and affordability for every workplace.
              </p>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src={hero}
                alt="Stationery Material"
                className="hero-image img-fluid"
              />

            </div>

          </div>

        </div>

      </section>

      <section className="product-section">

        <div className="container">

          <h2 className="section-title">
            Stationery Products
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

export default StationeryMaterial;