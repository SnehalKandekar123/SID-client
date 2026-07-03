// import React from "react";

// function RequestQuotation() {

//   return (

//     <div className="container py-5">

//       <h2 className="text-center text-primary fw-bold mb-4">
//         Request Quotation
//       </h2>

//       <div className="row justify-content-center">

//         <div className="col-lg-8">

//           <div className="card shadow">

//             <div className="card-body">

//               <form>

//                 <div className="row">

//                   <div className="col-md-6 mb-3">
//                     <label>Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter Name"
//                     />
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Company Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Company Name"
//                     />
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email"
//                     />
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Mobile</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Mobile Number"
//                     />
//                   </div>

//                   <div className="col-md-6 mb-3">

//                     <label>Category</label>

//                     <select className="form-select">

//                       <option>Select Category</option>

//                       <option>Hand & Power Tools</option>

//                       <option>Safety Material</option>

//                       <option>Packaging Material</option>

//                       <option>Stationery Material</option>

//                     </select>

//                   </div>

//                   <div className="col-md-6 mb-3">

//                     <label>Quantity</label>

//                     <input
//                       type="number"
//                       className="form-control"
//                     />

//                   </div>

//                   <div className="col-12 mb-3">

//                     <label>Message</label>

//                     <textarea
//                       rows="5"
//                       className="form-control"
//                     ></textarea>

//                   </div>

//                 </div>

//                 <button className="btn btn-primary w-100">

//                   Submit Request

//                 </button>

//               </form>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>

//   );

// }

// export default RequestQuotation;










import React, { useState } from "react";
import axios from "axios";

function RequestQuotation() {

  const [form, setForm] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    category: "",
    quantity: "",
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
        "https://sid-server.vercel.app/api/quotation",
        form
      );

      alert(res.data.message);

      setForm({
        name: "",
        companyName: "",
        email: "",
        mobile: "",
        category: "",
        quantity: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Failed to submit quotation request.");
    }
  };

  return (

    <div className="container py-5">

      <h2 className="text-center text-primary fw-bold mb-4">
        Request Quotation
      </h2>

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow">

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Company Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Category</label>

                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Category</option>
                      <option>Hand & Power Tools</option>
                      <option>Safety Material</option>
                      <option>Packaging Material</option>
                      <option>Stationery Material</option>
                    </select>

                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Quantity</label>

                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />

                  </div>

                  <div className="col-12 mb-3">

                    <label>Message</label>

                    <textarea
                      rows="5"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Write your requirement..."
                    ></textarea>

                  </div>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Submit Request
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RequestQuotation;