import React from "react";
function Unbeatable() {
  return (
    <div className="container-fluid pt-5 pb-5">
      <div className="row justify-content-evenly">
        <div className="col-md-2">
          <h4 style={{color:"#424242"}} className="pb-3">Unabeat able Pricing</h4>
          <p>
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a className="text-decoration-none" href="#!">See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className="col-md-2 text-center">
          <img src="media/image/pricing-eq.png" alt="pricing" />
          <p className="justify-content-center ">Free account
           opening</p>
        </div>
        <div className="col-md-2 text-center">
          <img src="media/image/pricing-eq.png" alt="pricing" />
          <p className="justify-content-center">Free equity delivery
           and direct mutual funds</p>
        </div>
        <div className="col-md-2 text-center">
          <img src="media/image/pricing-eq.png" alt="pricing" />
          <p className="justify-content-center">Intraday and
          F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Unbeatable;
