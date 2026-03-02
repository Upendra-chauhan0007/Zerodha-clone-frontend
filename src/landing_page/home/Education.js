import React from "react";
function Education() {
  return (
    <div className="container-fluid pt-5 pb-5">
        <div className="row justify-content-evenly">
            <div className="col-md-5">
                <img
                   className="img-fluid mb-4"
                   src="media/image/varsity.png"
                   alt="img"
                />
            </div>
            <div className="col-md-5 pt-5">
               <h3>Free and open market education</h3>
                <p className="pt-3">
                  Varsity, the largest online stock market education book in the world
                  covering everything from the basics to advanced trading.
                </p>

                <a className="text-decoration-none fw-medium" href="#!">
                  Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>

                <p className="pt-3">
                  TradingQ&A, the most active trading and investment community in
                  India for all your market related queries.
                </p>

                <a className="text-decoration-none fw-medium" href="#!">
                  TrandingQ&amp;A{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Education;
