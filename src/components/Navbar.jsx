

import "./Navbar.css";
import logo from "../assets/Logo.PNG";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">

      <div className="container">

        {/* Logo */}

        <Link className="navbar-brand d-flex align-items-center" to="/">

          <img
            src={logo}
            alt="Logo"
            className="logo"
          />

          {/* <span className="company-name">
            SID ENTERPRISES
          </span> */}

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li> */}

            {/* Category */}

           <li className="nav-item">
  <Link className="nav-link" to="/categories">
    Categories
  </Link>
</li>
{/* 
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link className="nav-link" to="/advertisement">
                Advertisement
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/quotation">
                Request Quotation
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

           

            {/* Profile */}

            <li className="nav-item dropdown">

              <a
                href="/#"
                className="nav-link"
                data-bs-toggle="dropdown"
              >

                <i className="bi bi-person-circle fs-3"></i>

              </a>

              <ul className="dropdown-menu dropdown-menu-end">

                <li>

                  <Link
                    className="dropdown-item"
                    to="/login"
                  >
                    Login
                  </Link>

                </li>

              </ul>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;