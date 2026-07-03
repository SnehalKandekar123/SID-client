import React from "react";

function RequestQuotation() {

  return (

    <div className="container py-5">

      <h2 className="text-center text-primary fw-bold mb-4">
        Request Quotation
      </h2>

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow">

            <div className="card-body">

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>

                  <div className="col-md-6 mb-3">

                    <label>Category</label>

                    <select className="form-select">

                      <option>Select Category</option>

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
                      className="form-control"
                    />

                  </div>

                  <div className="col-12 mb-3">

                    <label>Message</label>

                    <textarea
                      rows="5"
                      className="form-control"
                    ></textarea>

                  </div>

                </div>

                <button className="btn btn-primary w-100">

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