import React from "react";

function Banner() {
  return (
    <div className="container-fluid bg-light px-5 mb-5">
      <h3 className="text-center pt-5">
        Steps to open a demat account with Zerodha
      </h3>
      <div className="row text-center justify-content-evenly">
        <div className="col-md-5">
          <img
            src="media/image/products-kite.png"
            className="img-fluid"
            alt="account-open-img"
          />
        </div>
        <div className="col-md-5">
          <div className="account-open-steps-num pt-5 px-1">
            <div className="d-flex align-items-center py-3 border-bottom">
              <span className="round me-4">01</span>
              <p className="mb-0 fs-5">Enter the Requested Details</p>
            </div>
            <div className="d-flex align-items-center py-3 border-bottom">
              <span className="round me-4">02</span>
              <p className="mb-0 fs-5">Complete e-sign & verification</p>
            </div>
            <div className="d-flex align-items-center py-3">
              <span className="round me-4">03</span>
              <p className="mb-0 fs-5">Start Investing!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
