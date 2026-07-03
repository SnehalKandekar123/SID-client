import React from "react";
import axios from "axios";
import { useState } from "react";
import "../pages/contact.css";

function Contact() {
const [form, setForm] = useState({
  fullName: "",
  email: "",
  mobile: "",
  message: "",
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://sid-server.vercel.app/api/contact",
      form
    );

    alert(res.data.message);

    setForm({
      fullName: "",
      email: "",
      mobile: "",
      message: "",
    });
  } catch (err) {
    alert("Error");
  }
};

  return (

    <div className="container py-5">

      <h2 className="text-center text-primary fw-bold mb-5">

        Contact Us

      </h2>

      <div className="row">
<div className="col-lg-5">

    <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700"
        className="img-fluid rounded shadow"
        alt="Contact"
    />

</div>

        <div className="col-lg-7">

          {/* <div className="card shadow p-4"> */}
          <div className="card shadow contact-card">

            <h4 className="mb-4">

              Send Enquiry

            </h4>

           <form onSubmit={handleSubmit}>

  <div className="row mb-3 align-items-center">

    <label className="col-md-3 col-form-label fw-bold">
      Full Name :
    </label>

    <div className="col-md-9">
      <input
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        className="form-control"
        placeholder="Enter Full Name"
        required
      />
    </div>

  </div>

  <div className="row mb-3 align-items-center">

    <label className="col-md-3 col-form-label fw-bold">
      Email :
    </label>

    <div className="col-md-9">
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="form-control"
        placeholder="Enter Email"
        required
      />
    </div>

  </div>

  <div className="row mb-3 align-items-center">

    <label className="col-md-3 col-form-label fw-bold">
      Mobile :
    </label>

    <div className="col-md-9">
      <input
        type="tel"
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        className="form-control"
        placeholder="Enter Mobile Number"
        required
      />
    </div>

  </div>

  <div className="row mb-4">

    <label className="col-md-3 col-form-label fw-bold">
      Message :
    </label>

    <div className="col-md-9">
      <textarea
        rows="5"
        name="message"
        value={form.message}
        onChange={handleChange}
        className="form-control"
        placeholder="Write your message..."
        required
      ></textarea>
    </div>

  </div>

  <div className="text-end">

  <button
    type="submit"
    className="btn btn-primary btn-submit"
  >
    Send Message
  </button>

</div>

</form>

          </div>

        </div>

      </div>

      {/* <div className="mt-5">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Sanaswadi,Pune&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </div> */}

    </div>

  );

}

export default Contact;