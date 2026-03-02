import React from "react";

function RightSectionD() {
    return (
       <div className="container-fluid pt-5">
           <div className="row justify-content-evenly">
            <div className="col-md-5 pt-5">
                 <h4 className="text-muted pt-5">Kite Connect API</h4>
            <p className="pt-4 text-muted" style={{lineHeight:"1.6",fontSize:"1rem"}}>Build powerful trading platforms and <br/>experiences with our super simple<br/>HTTP/JSON APIs. If you are a startup,<br/> build your investment app and<br/> showcase it to our clientbase.</p>
            <a className="text-decoration-none me-4 pe-5 fw-medium" href="#!">Kite Connect <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" style={{height:"376px",width:"533px"}} src="media/image/products-kite-connect-api.png"alt="kit-API-image"/>
            </div>
           </div>
       </div>
    );
}

export default RightSectionD;
