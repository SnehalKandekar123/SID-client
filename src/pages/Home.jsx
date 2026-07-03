

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/home1.PNG";
import banner1 from "../assets/banner.PNG";
import "../pages/Home.css";

function Home() {
    useEffect(() => {

const sections = document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right"
);

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },

    {
      threshold: 0.2,
    }

  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();

}, []);
  return (
    <>
      {/* Banner Section */}

      {/* <section className="container-fluid p-0">

        <img
          src={banner}
          alt="SID Enterprises"
          className="img-fluid w-100"
          style={{ maxHeight: "550px", objectFit: "cover" }}
        />

      </section> */}
<section className="hero-section">

  <img
    src={banner}
    alt="SID Enterprises"
    className="hero-image1"
  />

  <div className="hero-overlay">

    <div className="hero-text">
<h1 className="display-4 fw-bold text-danger">
          Welcome To
        </h1>

      <h1 className="display-4 fw-bold text-danger">
          SID ENTERPRISES
        </h1> 

      {/* <p>All Types Industrial Material Suppliers</p> */}

    </div>

  </div>

</section>
      {/* Welcome Section */}

      <section className="container text-center py-5 ">

        {/* <h5 className="text-primary fw-bold">
          Welcome To
        </h5>

        <h1 className="display-4 fw-bold text-danger">
          SID ENTERPRISES
        </h1> */}

        <h2 className="text-dark fw-bold mt-3">
          All Types Industrial Material Suppliers
        </h2>

        <hr className="w-25 mx-auto" />

        <p className="fs-5">
          <strong>
            Hand & Power Tools
          </strong>
          &nbsp; | &nbsp;

          <strong>
            Safety
          </strong>

          &nbsp; | &nbsp;

          <strong>
            Packaging
          </strong>

          &nbsp; | &nbsp;

          <strong>
            Stationery
          </strong>

        </p>

        <br />

        <h5 className="fw-bold">
          Address
        </h5>

        <p>
          A/p Sanaswadi,
          Tal-Shirur,
          Pune - 412208,
          Maharashtra
        </p>

        <h5 className="fw-bold">
          Email
        </h5>

        <p>
          sidenterprises1555@gmail.com
        </p>

        <h5 className="fw-bold">
          Contact
        </h5>

        <p>
          +91 7058375555 /
          +91 9325061515
        </p>

      </section>

      {/* About Company */}

      <section className="container py-5 fade-left">

        <div className="row">

          <div className="col-lg-6">

            <h2 className="text-primary fw-bold">
              About SID ENTERPRISES
            </h2>

            <p className="mt-4">

              SID ENTERPRISES is one of the leading
              Industrial Material Suppliers in Pune.

              We provide premium quality Hand & Power Tools,
              Safety Materials, Packaging Materials,
              and Stationery Products for all industrial needs.

            </p>

            <Link
              to="/about"
              className="btn btn-primary mt-3"
            >
              Read More
            </Link>

          </div>

          <div className="col-lg-6">

            <img
              src={banner1}
              className="img-fluid rounded shadow"
              alt=""
            />

          </div>

        </div>

      </section>

      {/* Categories */}

     <section className="container py-5 fade-right">

    <h2 className="text-center text-primary fw-bold mb-5">
        Our Categories
    </h2>

    <div className="row g-4">

        <div className="col-lg-3 col-md-6">

            <Link to="/handpowertools" className="text-decoration-none">

                <div className="card category-home-card shadow">

                    <img
                        src={require("../assets/handtoolmain.jfif")}
                        className="card-img-top"
                        alt=""
                    />

                    <div className="card-body text-center">

                        <h5>Hand & Power Tools</h5>

                    </div>

                </div>

            </Link>

        </div>

        <div className="col-lg-3 col-md-6">

            <Link to="/safetymaterial" className="text-decoration-none">

                <div className="card category-home-card shadow">

                    <img
                        src={require("../assets/safetymain.jfif")}
                        className="card-img-top"
                        alt=""
                    />

                    <div className="card-body text-center">

                        <h5>Safety Material</h5>

                    </div>

                </div>

            </Link>

        </div>

        <div className="col-lg-3 col-md-6">

            <Link to="/packagingmaterial" className="text-decoration-none">

                <div className="card category-home-card shadow">

                    <img
                        src={require("../assets/PACKAGING MATERIALPNG.PNG")}
                        className="card-img-top"
                        alt=""
                    />

                    <div className="card-body text-center">

                        <h5>Packaging Material</h5>

                    </div>

                </div>

            </Link>

        </div>

        <div className="col-lg-3 col-md-6">

            <Link to="/stationerymaterial" className="text-decoration-none">

                <div className="card category-home-card shadow">

                    <img
                        src={require("../assets/stationarymain.jfif")}
                        className="card-img-top"
                        alt=""
                    />

                    <div className="card-body text-center">

                        <h5>Stationery Material</h5>

                    </div>

                </div>

            </Link>

        </div>

    </div>

</section>

      {/* Why Choose Us */}

     <section className="bg-light py-5 fade-up">

        <div className="container">

          <h2 className="text-center text-primary mb-5">

            Why Choose Us

          </h2>

          <div className="row">

            <div className="col-md-3 text-center">

              <h1>✔</h1>

              <h5>Best Quality</h5>

            </div>

            <div className="col-md-3 text-center">

              <h1>🚚</h1>

              <h5>Fast Delivery</h5>

            </div>

            <div className="col-md-3 text-center">

              <h1>💰</h1>

              <h5>Affordable Price</h5>

            </div>

            <div className="col-md-3 text-center">

              <h1>🤝</h1>

              <h5>Customer Support</h5>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Button */}

    <section className="container text-center py-5 fade-left">
        <h2 className="fw-bold">

          Need Industrial Materials?

        </h2>

        <p>

          Contact SID ENTERPRISES today for quality industrial products.

        </p>

        <Link
          to="/contact"
          className="btn btn-danger btn-lg"
        >
          Contact Us
        </Link>

      </section>

    </>
  );
}

export default Home;