import React from "react";

function LeftSectionE() {
  return (
    <div className="container-fluid pt-5">
      {/* Left products start */}
      <div className="row justify-content-evenly pt-5">
        <div className="col-md-5">
          <img className="img-fluid" style={{height:"407px",width:"310px"}} src="media/image/varsity-products.png"alt="varsity-image"/>
        </div>
        <div className="col-md-5">
          <div className="pt-5 px-5">
            <h4 className="text-muted">Varsity mobile</h4>
            <p className="pt-4 text-muted" style={{lineHeight:"1.6",fontSize:"1rem"}}>An easy to grasp, collection of stock market<br/> lessons with in-depth coverage and<br/> illustrations. Content is broken down into<br/> bite-size cards to help you learn on the go.</p>
            <div className="pt-4">
              <a href="#!">
              <img src="media/image/googlePlayBadge.svg" className="img-fluid me-3 pe-1" alt="google-play"/>
              </a>
              <a href="#!">
              <img src="media/image/appstoreBadge.svg" className="img-fluid" alt="apple-store"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center pt-4">
            <h5 className="text-muted">Want to know more about our technology stack? Check out the <a href="#!" className="text-decoration-none">Zerodha.tech</a> blog.</h5>
        </div>
      </div>
    </div>
  );
}

export default LeftSectionE;
