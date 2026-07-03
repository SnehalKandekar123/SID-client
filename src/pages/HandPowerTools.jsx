import { Link } from "react-router-dom";
import "../pages/HandPowerTools.css";

import hero from "../assets/handtoolmain.jfif";

import hammer from "../assets/handtool.PNG";
import drill from "../assets/handtool1.PNG";
import grinder from "../assets/hand tool 3.PNG";
import spanner from "../assets/handtool4.PNG";

function HandPowerTools() {
  const products = [
    {
      image: hammer,
      title: "Pneumatic Screw Drivers & Impact Wrenches ",
      desc: "Air screwdrivers, impact wrenches, pneumatic drills and industrial air tools."
    },
    {
      image: drill,
      title: "Hand Tool Kits",
      desc: "Professional tool kits, screwdrivers, pliers, hex keys and accessories."
    },
    {
      image: grinder,
      title: "Industrial Hand Tools",
      desc: "Bench vice, pipe wrenches, adjustable spanners, testers and hand tools."
    },
    
   {
    image: spanner,
    title: "Cutting & Drilling Tools",
    desc: "Drill bits, cutting wheels, cut-off machines, punches and air blowers."
  }
  ];

  return (
    <>
      {/* Hero Section */}

      <section className="category-banner">
        <div className="container">

          <Link to="/Categories" className="btn btn-light mb-4">
            ← Back
          </Link>

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1>Hand & Power Tools</h1>

              <p>
                We supply premium quality industrial hand tools and power tools
                for workshops, construction sites, factories, and engineering
                industries. Our products are durable, reliable, and built for
                heavy-duty performance.
              </p>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src={hero}
                alt=""
                className="img-fluid hero-img"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Products */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          Our Products
        </h2>

        <div className="row">

          {products.map((item, index) => (

            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="product-card">

                <img
                  src={item.image}
                  className="img-fluid"
                  alt=""
                />

                <div className="p-4">

                  <h5>{item.title}</h5>

                  <p>{item.desc}</p>

                  <button className="btn btn-primary w-100">
                    Enquiry Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default HandPowerTools;