import React from "react";

function LeftSectionC() {
  return (
    <div className="container-fluid">
      {/* Left products start */}
      <div className="row justify-content-evenly">
        <div className="col-md-5">
          <img className="img-fluid" style={{height:"403px",width:"573px"}} src="media/image/products-coin.png"alt="Coin-image"/>
        </div>
        <div className="col-md-5">
          <div className="pt-5 px-5">
            <h4 className="text-muted">Coin</h4>
            <p className="pt-4 text-muted" style={{lineHeight:"1.6",fontSize:"1rem"}}>Buy direct mutual funds online, commission-<br/>free, delivered directly to your Demat<br/> account. Enjoy the investment experience<br/> on your Android and iOS devices.</p>

            <a className="text-decoration-none me-4 pe-5 fw-medium" href="#!">Coin <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

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
    </div>
  );
}

export default LeftSectionC;
