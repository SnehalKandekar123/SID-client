// import React from "react";
// import banner from "../assets/banner.PNG";
// import banner1 from "../assets/SIDAdvertisement.PNG";

// function Advertisement() {
//   return (
//     <div className="container py-5">

//       <h2 className="text-center text-primary fw-bold mb-4">
//         Advertisement
//       </h2>

//       <div
//         id="advertisementCarousel"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >

//         <div className="carousel-inner">

//           <div className="carousel-item active">
//             <img
//               src={banner}
//               className="d-block w-100 rounded"
//               alt="Advertisement"
//             />
//           </div>

//           <div className="carousel-item">
//             <img
//               src={banner1}
//               className="d-block w-100 rounded"
//               alt="Advertisement"
//             />
//           </div>

//           <div className="carousel-item">
//             <img
//               src={banner}
//               className="d-block w-100 rounded"
//               alt="Advertisement"
//             />
//           </div>

//         </div>

//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#advertisementCarousel"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon"></span>
//         </button>

//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#advertisementCarousel"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon"></span>
//         </button>

//       </div>

//       <div className="mt-5">

//         <h3 className="text-primary">
//           SID ENTERPRISES
//         </h3>

//         <p>
//           We provide quality Industrial Materials like
//           Hand & Power Tools,
//           Safety Material,
//           Packaging Material and
//           Stationery Material.
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Advertisement;



import React from "react";
import banner from "../assets/banner.PNG";
import banner1 from "../assets/SIDAdvertisement.PNG";
import "../pages/Advertisement.css";

function Advertisement() {
  return (
    <>
      {/* Hero */}

      <section className="advertisement-hero">

        <div className="overlay">

          <div className="container text-center">

            <h1>Advertisement</h1>

            <p>
              Explore our Industrial Products & Latest Promotions
            </p>

          </div>

        </div>

      </section>

      {/* Carousel */}

      <section className="container py-5">

        <div
          id="advertisementCarousel"
          className="carousel slide carousel-fade shadow-lg rounded overflow-hidden"
          data-bs-ride="carousel"
          data-bs-interval="2500"
        >

          <div className="carousel-inner">

            <div className="carousel-item active">

              <img
                src={banner}
                className="d-block w-100 carousel-img"
                alt=""
              />

            </div>

            <div className="carousel-item">

              <img
                src={banner1}
                className="d-block w-100 carousel-img"
                alt=""
              />

            </div>

            <div className="carousel-item">

              <img
                src={banner}
                className="d-block w-100 carousel-img"
                alt=""
              />

            </div>

          </div>

          <button
            className="carousel-control-prev"
            data-bs-target="#advertisementCarousel"
            data-bs-slide="prev"
          >

            <span className="carousel-control-prev-icon"></span>

          </button>

          <button
            className="carousel-control-next"
            data-bs-target="#advertisementCarousel"
            data-bs-slide="next"
          >

            <span className="carousel-control-next-icon"></span>

          </button>

        </div>

      </section>

      {/* Company Details */}

      <section className="container py-5">

        <div className="row g-4">

          <div className="col-lg-6">

            <div className="info-card">

              <h2>SID ENTERPRISES</h2>

              <p>

                SID ENTERPRISES is one of the trusted Industrial Material
                Suppliers in Pune.

              </p>

              <ul>

                <li>✔ Hand & Power Tools</li>

                <li>✔ Safety Material</li>

                <li>✔ Packaging Material</li>

                <li>✔ Stationery Material</li>

              </ul>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="info-card">

              <h2>Why Choose Us?</h2>

              <div className="row text-center mt-4">

                <div className="col-6 mb-4">

                  <h1>🏭</h1>

                  <h6>Industrial Quality</h6>

                </div>

                <div className="col-6 mb-4">

                  <h1>🚚</h1>

                  <h6>Fast Delivery</h6>

                </div>

                <div className="col-6">

                  <h1>💰</h1>

                  <h6>Best Price</h6>

                </div>

                <div className="col-6">

                  <h1>🤝</h1>

                  <h6>Trusted Service</h6>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="advertisement-contact">

        <div className="container text-center">

          <h2>Need Industrial Materials?</h2>

          <p>

            Contact SID ENTERPRISES today for premium industrial products.

          </p>

          <a
            href="/contact"
            className="btn btn-warning btn-lg px-5"
          >
            Contact Us
          </a>

        </div>

      </section>

    </>
  );
}

export default Advertisement;