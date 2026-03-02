import React from "react";
import { Link } from "react-router-dom";
function LeftSectionA() {
  return (
    <div className="container-fluid pt-5">
      {/* Left products start */}
      <div className="row justify-content-evenly pt-5">
        <div className="col-md-5">
          <img className="img-fluid" style={{height:"421px",width:"558px"}} src="media/image/products-kite.png"alt="kit-image"/>
        </div>
        <div className="col-md-5">
          <div className="pt-5 px-5">
            <h4 className="text-muted">Kite</h4>
            <p className="pt-4 text-muted font-Questrial" style={{lineHeight:"1.6",fontSize:"1rem"}}>Our ultra-fast flagship trading platform with<br/> streaming market data, advanced charts, an<br/> elegant UI, and more. Enjoy the Kite<br/> experience seamlessly on your Android and<br/> iOS devices.</p>

            <Link className="text-decoration-none me-4 pe-5 fw-medium" to={"/DashboardKite/TryDemo"}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            <Link className="text-decoration-none fw-medium" to={"/Learmore"}>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>

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

export default LeftSectionA;
