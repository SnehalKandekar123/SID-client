import { Link } from "react-router-dom";

import handTools from "../assets/handtoolmain.jfif";
import safety from "../assets/safetymain.jfif";
import packaging from "../assets/packaging-material.webp";
import stationery from "../assets/stationarymain.jfif";

import "../pages/categories.css";

function Categories() {
//   const categories = [
//     {
//       title: "Hand & Power Tools",
//       image: handTools,
//       path: "/Categories/hand-power-tools",
//       desc: "Professional quality hand tools and power tools for industrial and construction work."
//     },
//     {
//       title: "Safety Material",
//       image: safety,
//       path: "/Categories/safety-material",
//       desc: "Complete range of industrial safety products for workplace protection."
//     },
//     {
//       title: "Packaging Material",
//       image: packaging,
//       path: "/Categories/packaging-material",
//       desc: "Premium packaging materials to keep your products safe during transport."
//     },
//     {
//       title: "Stationery Material",
//       image: stationery,
//       path: "/Categories/stationery-material",
//       desc: "Office stationery and essential supplies for daily business operations."
//     },
//   ];
const categories = [
  {
    title: "Hand & Power Tools",
    image: handTools,
    path: "/handpowertools",
    desc: "Professional quality hand tools and power tools for industrial and construction work."
  },
  {
    title: "Safety Material",
    image: safety,
    path: "/safetymaterial",
    desc: "Complete range of industrial safety products for workplace protection."
  },
  {
    title: "Packaging Material",
    image: packaging,
    path: "/packagingmaterial",
    desc: "Premium packaging materials to keep your products safe during transport."
  },
  {
    title: "Stationery Material",
    image: stationery,
    path: "/stationerymaterial",
    desc: "Office stationery and essential supplies for daily business operations."
  }
];

  return (
    <>
      {/* Hero Section */}

      <section className="category-hero">
        <div className="container text-center">
          <h1>Our Product Categories</h1>
          <p>
            Explore our wide range of industrial products designed to meet
            every business requirement.
          </p>
        </div>
      </section>

      {/* Categories */}

      <section className="container py-5">

        <div className="row">

          {categories.map((item, index) => (

            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="category-card">

                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                />

                <div className="p-4 text-center">

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>

                  <Link
                    to={item.path}
                    className="btn btn-primary"
                  >
                    View Products
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default Categories;