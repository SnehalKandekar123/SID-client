import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row gy-4">

          {/* Company */}

          <div className="col-lg-3">

            <h4>SID ENTERPRISES</h4>

            <p>
              We supply premium quality Industrial Materials including
              Hand & Power Tools, Safety Material, Packaging Material
              and Stationery Material across Maharashtra.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/Categories">Categories</Link></li>

              <li><Link to="/Advertisement">Advertisement</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3">

            <h5>Contact Info</h5>

            <p>
              <FaMapMarkerAlt className="me-2" />
              A/P Sanaswadi, Tal-Shirur,
              Pune-412208
            </p>

            <p>
              <FaPhoneAlt className="me-2" />
              <a href="tel:+917058375555">
                +91 7058375555
              </a>
            </p>

            <p>
              <FaEnvelope className="me-2" />
              <a href="mailto:sidenterprises1555@gmail.com">
                sidenterprises1555@gmail.com
              </a>
            </p>

            <div className="social-icons">

              <a
                href="https://wa.me/917058375555"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Google Map */}

          <div className="col-lg-4">

            <h5>Location</h5>

            <iframe
              title="SID Enterprises"
              src="https://www.google.com/maps?q=Sanaswadi,Pune&output=embed"
              width="100%"
              height="220"
              style={{
                border: 0,
                borderRadius: "10px",
              }}
              loading="lazy"
            ></iframe>

          </div>

        </div>

        <hr />

        <div className="text-center">

          © {new Date().getFullYear()} SID ENTERPRISES.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;